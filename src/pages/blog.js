import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as styles from "../styles/blog.module.css"
import Category from "../components/blog/category"
import { useState } from "react"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [filteredCat, setFilteredCat] = useState("All")

  const filterCatHandler = selected => {
    setFilteredCat(selected)
  }

  console.log(filteredCat + "!!!")

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>등록된 포스트가 없습니다.</p>
      </Layout>
    )
  }
  if (filteredCat === "All") {
    return (
      <Layout>
        <div className="pt-10 ">
          <div className="relative flex flex-row gap-2 ">
            <div className={`${styles.category} flex flex-col`}>
              <Bio />
              <div className="border-b border-gray-400 w-full my-1"></div>

              <Category data={data} onChangeCat={filterCatHandler}></Category>
            </div>
            <ol className={`${styles.blog} flex-1`}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li className="w-full flex flex-row" key={post.fields.slug}>
                    <div className="card-container w-full transition ease-in-out delay-100 hover:-translate-y-2  duration-200">
                      <img
                        src={post.frontmatter.image}
                        className="w-40"
                        alt=""
                      />

                      <article
                        className="flex-1 post-list-item card mb-3 "
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header className="card-header px-3 py-2">
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section className="card-body px-3 py-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </article>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </Layout>
    )
  } else {
    const filterExpenses = posts.filter(post => {
      return post.frontmatter.category === filteredCat
    })
    console.log(filteredCat)
    console.log(filterExpenses)
    return (
      <Layout>
        <div className="pt-10">
          <div className="relative flex flex-row gap-2 ">
            <div className={`${styles.category} flex flex-col`}>
              <Bio />
              <div className="border-b border-gray-400 w-full my-1"></div>

              <Category data={data} onChangeCat={filterCatHandler}></Category>
            </div>
            <ol className={`${styles.blog} flex-1`}>
              {filterExpenses.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li className="w-full flex flex-row" key={post.fields.slug}>
                    <div className="card-container w-full transition ease-in-out delay-100 hover:-translate-y-2  duration-200">
                      <img
                        src={post.frontmatter.image}
                        className="w-40"
                        alt=""
                      />
                      <article
                        className="flex-1 post-list-item card mb-3 "
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header className="card-header px-3 py-2">
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section className="card-body px-3 py-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </article>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          image
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
`
