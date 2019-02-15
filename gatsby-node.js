const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js')
    resolve(
      graphql(`
      {
        posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY", locale: "fr")
                category
                coverImage {
                  publicURL
                  childImageSharp {
                    sizes(maxWidth: 800) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }   
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        createPaginatedPages({
          edges: result.data.posts.edges,
          createPage: createPage,
          pageTemplate: 'src/templates/index.js',
          pageLength: 6,
          pathPrefix: '',
          context: {},
        })

        // Create category list
        const categorySet = new Set()
        result.data.posts.edges.forEach(edge => {
          const {
            node: {
              frontmatter: { category }
            }
          } = edge

          if (category && category !== null) {
            categorySet.add(category)
          }
        })

        // Create category pages
        const categoryList = Array.from(categorySet)
        categoryList.forEach(category => {
          createPage({
            // convert to kebab-case
            path: `/category/${ category.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase() }/`,
            component: categoryTemplate,
            context: {
              category
            }
          })
        })

        // Create blog posts
        result.data.posts.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })
      })
    )
  })
}
