import React from "react"
import Article from "../Article"
import Title from "../Title"
import Link from "../Link"

const Offer = ({ id, title, location, url }) => {

  return (
    <Article data-id={id} className="Article--offers">
      <Title tag="h1" className="Title--second">{ title }</Title>
      <p>{ location }</p>
      <Link className="Link--button Link--noDecoration" href={ url }>
        View details
      </Link>
    </Article>
  )
}

Offer.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

Offer.defaultProps = {
  id: 0,
  title: "",
  location: "",
  url: "",
}

export default Offer
