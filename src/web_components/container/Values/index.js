import React, { Component } from "react"
import List from "../../presentational/List"
import { values } from "../../../../data/db.json"

export default class Values extends Component {

  render() {
    return (
			<List className="List--values" items={ values } type="values" />
    )
  }
}
