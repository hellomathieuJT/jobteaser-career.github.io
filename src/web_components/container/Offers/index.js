import React, { Component } from "react"
import List from "../../presentational/List"
import { offers } from "../../../../data/db.json"

export default class Offers extends Component {

  render() {
    return (
			<List className="List--offers" items={ offers } type="offers" />
    )
  }
}
