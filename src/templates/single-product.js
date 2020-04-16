import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Article from "../components/article"
import SEO from "../components/seo"
import TagList from "../components/tagList"

class SingleProduct extends Component {
  render() {
    const product = this.props.data.wordpressWpProducts

    console.log(product)

    return (
      <Layout>
        {/* <SEO
          title={product.yoast_meta.yoast_wpseo_title}
          description={product.yoast_meta.yoast_wpseo_metadesc}
          keywords={product.tags.map(tag => tag.name)}
        /> */}
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: product.title }} />
          <section>
            <Img
              alt={product.featured_media.alt_text}
              fluid={product.featured_media.localFile.childImageSharp.fluid}
            />
          </section>
          <section>
            {/* <TagList tags={product.tags.map(tag => tag.name)} /> */}
          </section>
          {/* <Article>{parse(product.content)}</Article> */}
        </div>
      </Layout>
    )
  }
}

SingleProduct.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProduct
// content
// yoast_meta {
//   yoast_wpseo_title
//   yoast_wpseo_metadesc
// }
export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProducts(id: { eq: $id }) {
      wordpress_id
      title
      date
      films
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 804) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
