import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function info() {
  return (
    <StaticQuery
      query={graphql`
        {
          info: site {
            siteMetadata {
              title
              description
              info
              author
            }
          }
        }
      `}
      render={data => {
        const siteData = data.info.siteMetadata
        const { title, info, description, author } = siteData
        return (
          <div>
            <h2>Title : {title}</h2>
            <h2>Info : {info}</h2>
            <p>Description : {description}</p>
            <h2>Author : {author}</h2>
          </div>
        )
      }}
    />
  )
}
