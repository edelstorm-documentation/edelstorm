import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const getDude = graphql`
  {
    file(relativePath: { eq: "test.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default function dude() {
  return (
    <div>
      <StaticQuery
        query={getDude}
        render={data => {
          console.log(data)
          return <Img fluid={data.file.childImageSharp.fluid} />
        }}
      />
    </div>
  )
}
