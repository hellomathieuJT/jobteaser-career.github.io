import React from "react"
import Article from "../Article"
import Title from "../Title"
import Link from "../Link"

const Offer = ({ id, title, location }) => {

  return (
    <Article data-id={id} className="Article--offers">
      <Title tag="h1" className="Title--second">{ title }</Title>
      <p>{ location }</p>
      <Link className="Link--button Link--noDecoration">
        View details
      </Link>
    </Article>
  )
}

Offer.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
}

Offer.defaultProps = {
  id: 0,
  title: "",
  location: "",
}

export default Offer
