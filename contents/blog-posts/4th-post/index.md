---
title: 4th Post
date: "2023-10-13T22:12:03.284Z"
description: "Gatsby Blog"
category: "frontend"
image: "https://thumbs.dreamstime.com/z/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg?w=992"
---

# APIs

### CreatePages

동적으로 페이지를 만드는 api이다.

이는 Initial 소싱후에만 불려지기 때문에 페리지를 생성하기위한 데이터를 쿼리할 수 있게된다.

node API의 일종으로 매개변수로는 actions, graphql(Graph QL API)를 받는다. actions는 Gatsby 내부적으로 사용되는 상태를 관리하기 위한 함수 set 이다. 이 중 하나인 createPage 함수는 생성할 페이지 URL과 템플릿 컴포넌트 경로, context를 인수로 받아 새로운 페이지를 생성한다.

- how to create?

```jsx
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
```

### Parameters

어떤 파라미터들을 넣을 수 있는지 자세히 알아보자
