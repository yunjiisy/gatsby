const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const blogPost = path.resolve(`./src/post/blog-post.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          tableOfContents
        }
      }
    }
  `)
  const group = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            category
          }
        }
        group(field: { frontmatter: { category: SELECT } }) {
          edges {
            node {
              id
            }
          }
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`error loading posts`, result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          toc: post.tableOfContents,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // // 각 페이지에 대한 설정
  // const pages = [
  //   { path: "/", component: require.resolve("./src/pages/index.js") },
  //   { path: "/about", component: require.resolve("./src/pages/about.js") },
  //   {
  //     path: "/projects",
  //     component: require.resolve("./src/pages/projects/index.js"),
  //   },
  //   { path: "/blog", component: require.resolve("./src/pages/blog.js") },
  //   // 다른 페이지도 추가할 수 있음
  // ]

  // // 페이지 생성
  // pages.forEach(page => {
  //   createPage({
  //     path: `/gatsby${page.path}`, // "gatsby" 접두어 추가
  //     component: page.component,
  //   })
  // })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      category: String
      image:String
    }

    type Fields {
      slug: String
    }
  `)
}
