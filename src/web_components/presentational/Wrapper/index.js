import React, { PropTypes, Component } from "react"
// import ReactDom from "react-dom"
import cx from "classnames"

class Wrapper extends Component {

  constructor(props) {
    super(props)

    this.wrapper = null
    // this.onMouseMove = this.onMouseMove.bind(this)
  }

  componentDidMount() {
    // this.wrapper = ReactDom.findDOMNode(this._wrapper)
    // this.wrapper.addEventListener("mousemove", this.onMouseMove)
  }

  // componentWillUnmount() {
  //   this.wrapper.removeEventListener("mousemove", this.onMouseMove)
  // }

  render() {

    const { className, children } = this.props

    const classNames = cx({
      "Wrapper": true,
      [`${className}`]: !!className,
    })

    return (
      <div className={ classNames }>
        { children }
      </div>
    )
  }
}

Wrapper.propTypes = {
  className: PropTypes.string,
}

Wrapper.defaultProps = {
  className: "",
}

export default Wrapper
