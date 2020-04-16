import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

export default ({ data }) => {
  console.log(data)
  const product = data
  return (
    <Layout>
      <SEO title={product.title} />
      <h1>{product.title}</h1>

      {/* <Img
        className="selfie"
        fluid={node.image.childImageSharp.fluid}
        alt={node.conference}
      /> */}

      <div>
        {data.allWordpressWpProducts.edges.map(({ node }) => (
          <Card
            title={node.title}
            // description={node.excerpt}
            target={`/${node.slug}.html`}
            // tags={node.tags.map(tag => tag.name)}
          >
            <Img
              alt={node.featured_media.alt_text}
              fluid={node.featured_media.localFile.childImageSharp.fluid}
            />
          </Card>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressWpProducts(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          featured_media {
            source_url
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
