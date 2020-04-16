import React, { Component } from "react"
import { Link } from "gatsby"
// import TagList from "./tagList"

class Card extends Component {
  render() {
    return (
      <article>
        <section>
          <Link to={this.props.target}>{this.props.children}</Link>
        </section>
        <section>
          <h2>
            <Link to={this.props.target} href="#">
              {this.props.title}
            </Link>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: this.props.description }} />
          {/* <TagList tags={this.props.tags} /> */}
        </section>
      </article>
    )
  }
}

export default Card
