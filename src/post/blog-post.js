import * as React from "react"
import { Link, graphql } from "gatsby"
import TableOfContents from "../components/TableOfContents"
import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../styles/post.module.css"
import { useEffect } from "react"

const BlogPost = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  console.log(post.html)
  console.log("wowㄴㄴㄴㄴㄴㄴㄴㄴ")

  return (
    <Layout location={location} title={siteTitle}>
      <Bio></Bio>
      <div className={styles.post}>
        <article className="blog-post" itemScope>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <div className="post-container flex ">
            <div
              className="post-content w-3/4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="post-toc w-1/4 pl-7 ml-3 bg-gray-100 rounded-lg border-dotted border-2 border-indigo-600">
              <div className="mb-1 mt-2">목차</div>
              <TableOfContents toc={post.tableOfContents} />
            </div>
          </div>
          <hr />
          <footer>{/* <Bio /> */}</footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  ← {next.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
