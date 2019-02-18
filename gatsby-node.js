const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
              category {
                id
                name
              }
              createdAt(formatString: "DD MMMM, YYYY", locale: "fr")
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

        const posts = result.data.allContentfulBlogPost.edges
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
              category: { name }
            }
          } = edge

          if (name && name !== null) {
            categorySet.add(name)
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
            path: node.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
