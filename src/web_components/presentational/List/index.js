import React from "react"
import cx from "classnames"
import ListItem from "./item"
import Offer from "../Offer"

const List = ({ className, items, type }) => {

  const classNames = cx({
    "List": true,
    [`${className}`]: !!className,
  })

  return (
    <ul className={ classNames }>
    {
      items.map((item, i) => {

        const childItem = type === "values" ? item : <Offer { ...item } />

        return (
          <ListItem className={ `List-item--${type}` } key={ i }>
            { childItem }
          </ListItem>
        )
      })
    }
    </ul>
  )
}

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
}

List.defaultProps = {
  items: [],
  type: "",
  className: "",
}

export default List
