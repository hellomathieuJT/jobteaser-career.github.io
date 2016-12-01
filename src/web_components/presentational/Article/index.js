import React from "react"
import cx from "classnames"

const Article = ({ className, children }) => {

  const classNames = cx({
    "Article": true,
    [`${className}`]: !!className,
  })

  return (
		<article className={ classNames }> { children } </article>
  )
}

export default Article
