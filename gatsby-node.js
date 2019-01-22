const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  category
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

        const items = result.data.allMarkdownRemark.edges

        // Create category list
        const categorySet = new Set()
        items.forEach(edge => {
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
        items.forEach(({ node }) => {
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
