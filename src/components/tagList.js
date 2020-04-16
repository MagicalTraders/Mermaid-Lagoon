import React, { Component } from "react"

class TagList extends Component {
  render() {
    return (
      <ul>
        {this.props.tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
    )
  }
}

export default TagList
