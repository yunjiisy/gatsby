import React from "react"
import { graphql } from "gatsby"

const Category = ({ data, onChangeCat }) => {
  const group = data.allMarkdownRemark.group
  // const handleClick = category => {
  //   console.log(category)
  //   onChangeCat(category)
  // }

  // const posts = data.allMarkdownRemark.nodes

  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="font-semibold text-gray-700">Category</h3>
      <div className="text-md text-gray-600 flex flex-col items-start	">
        <button
          key={"All"}
          className="text-lg hover:bg-slate-300 hover:text-gray-800 w-full text-start p-1"
          onClick={() => onChangeCat("All")}
        >
          🫧 All
        </button>
        {group.map(prop => {
          const { fieldValue } = prop
          return (
            <button
              key={fieldValue}
              className=" text-lg hover:bg-slate-300 hover:text-gray-800 w-full text-start p-1"
              onClick={() => onChangeCat(fieldValue)}
            >
              🫧 {fieldValue}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Category

export const pageQuery = graphql`
  query {
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
