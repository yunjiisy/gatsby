import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1 className="text-gray-700">{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Project</Link>
        <Link to="/blog">Blog </Link>
      </div>
    </nav>
  )
}
