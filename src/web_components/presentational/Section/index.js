import React from "react"
import cx from "classnames"

const Section = ({ className, children }) => {

  const classNames = cx({
    "Section": true,
    [`${className}`]: !!className,
  })

  return (
		<section className={ classNames }>
			{ children }
		</section>
  )
}

export default Section
