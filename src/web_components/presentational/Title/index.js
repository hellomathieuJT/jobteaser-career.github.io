import React from "react"
import cx from "classnames"

const Title = ({ tag, className, children }) => {

  const CustomHeading = tag

  const classNames = cx({
    "Title": true,
    [`${className}`]: !!className,
  })

  return (
		<CustomHeading className={ classNames }>
			{ children }
		</CustomHeading>
  )
}

Title.propTypes = {
  tag: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
}

Title.defaultProps = {
  tag: "h1",
  className: "",
}

export default Title
