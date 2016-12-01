import React from "react"
import cx from "classnames"

const Text = ({ className, children }) => {

  const classNames = cx({
    "Text": true,
    [`${className}`]: !!className,
  })

  return (
		<div className={ classNames }>{ children }</div>
  )
}

export default Text
