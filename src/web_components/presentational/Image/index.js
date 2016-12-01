import React from "react"
import cx from "classnames"

const Image = ({ className, src }) => {

  const classNames = cx({
    "Image": true,
    [`${className}`]: !!className,
  })

  return (
		<img className={ classNames } src={ src || "#" } />
  )
}

Image.propTypes = {
  className: React.PropTypes.string,
}

Image.defaultProps = {
  className: "",
}

export default Image
