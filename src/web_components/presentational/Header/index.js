import React, { Component } from "react"
import cx from "classnames"
import ScrollerBehaviourHoc from "../../hoc/ScrollerBehaviour"
import Nav from "../Nav"
import Link from "../Link"
import Title from "../Title"
import SVGInline from "react-svg-inline"
import iconLogo from "../../../common_assets/images/logo.raw.svg"

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isScrollingDown: false,
      isScrolling: false,
    }
  }

  onScroll(scrollTop = 0) {
    this.setState({
      isScrollingDown: (scrollTop > 500 && scrollTop > this.state.scrollTop),
      isScrolling: scrollTop > 500,
    })
  }

  render() {

    const classNames = {
      header: cx({
        "Header": true,
      }),
      title: cx({
        "Title--header": true,
        "Title--normal": true,
        "Title--uppercase": true,
        "Title--white": !this.state.isScrolling,
        "Title--headerScrolling": this.state.isScrolling,
      }),
      nav: cx({
        "Nav--folded": this.state.isScrollingDown,
      }),
      baseline: cx({
        "Header-baseline": true,
        "Header-baseline--scrolling": this.state.isScrolling,
        "Header-baseline--scrollingDown": this.state.isScrollingDown,
      }),
      logo: cx({
        "Link--logo": true,
      }),
      svg: cx({
        "Svg": true,
        "Svg--logoScrolling": this.state.isScrolling,
      }),
    }

    return (
      <header className={ classNames.header }>

        <Nav  className={ classNames.nav } />

        <div className={ classNames.baseline }>
          <Link className={ classNames.logo }>
            <SVGInline className={ classNames.svg } svg={ iconLogo } />
          </Link>

          <Title tag="h1" className={ classNames.title }>
            Meet the Tech Team
          </Title>
        </div>

      </header>
    )
  }
}

export default ScrollerBehaviourHoc(Header)
