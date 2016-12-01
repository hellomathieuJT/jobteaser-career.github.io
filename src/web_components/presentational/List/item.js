import React from "react"
import cx from "classnames"

const ListItem = ({ className, children }) => {

  const classNames = cx({
    "List-item": true,
    [`${className}`]: !!className,
  })

  return (
		<li className={ classNames }>
			{ children }
		</li>
  )
}

export default ListItem
