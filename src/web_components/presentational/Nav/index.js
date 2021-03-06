import React, { PropTypes } from "react"
import cx from "classnames"
import Link from "../Link"

const Nav = ({ className }) => {

  const classNames = cx({
    "Nav": true,
    [`${className}`]: !!className,
  })

  return (
    <nav className={ classNames }>
      <ul className="Nav-list">
        <li className="Nav-item">
          <Link className="Nav-link"
            href="mailto:paul-armand.assus@jobteaser.com?subject=Application Jobteaser via Career website"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}

Nav.defaultProps = {
  className: "",
}

export default Nav
