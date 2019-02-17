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
    resolve(
      graphql(`
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          ) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "DD MMMM, YYYY", locale: "fr")
                category
              }
              fields {
                slug
              }
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

        const posts = result.data.allMarkdownRemark.edges
        const postsPerFirstPage = 7
        const postsPerPage = 6
        const numPages = Math.ceil(
          posts.slice(postsPerFirstPage).length / postsPerPage
        )

        // Create main home page
        createPage({
          path: `/`,
          component: path.resolve(`./src/templates/index.js`),
          context: {
            limit: postsPerFirstPage,
            skip: 0,
            numPages: numPages + 1,
            currentPage: 1,
          },
        })

        // Create additional pagination on home page if needed
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: `/${ i + 2 }/`,
            component: path.resolve(`./src/templates/index.js`),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage + postsPerFirstPage,
              numPages: numPages + 1,
              currentPage: i + 2,
            },
          })
        })

        // Create category set
        const categorySet = new Set()
        posts.forEach(edge => {
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
        const categoryTemplate = path.resolve('./src/templates/category.js')
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
        posts.forEach(({ node }) => {
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
