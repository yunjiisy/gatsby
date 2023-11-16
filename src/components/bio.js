/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col gap-1 items-start">
      <StaticImage
        className="rounded-full border-2 border-gray-400"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/yunjiLee.jpeg"
        width={60}
        height={60}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
          {" "}
          <p className="text-md">
            by <strong>{author.name}</strong>
          </p>
          {/* <p>{author?.summary || null}</p>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>isy'sblog</a> */}
        </>
      )}
    </div>
  )
}

export default Bio
