import React from "react"
import cx from "classnames"

const Link = ({ className, href, onClick, children }) => {

  const classNames = cx({
    "Link": true,
    [`${className}`]: !!className,
  })

  return (
		<a onClick={ onClick } className={ classNames } href={ href || "#" }>
			{ children }
		</a>
  )
}

Link.propTypes = {
  className: React.PropTypes.string,
}

Link.defaultProps = {
  className: "",
}

export default Link
