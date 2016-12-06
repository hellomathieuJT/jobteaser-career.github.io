import React, { Component } from "react"
import SVGInline from "react-svg-inline"
import Link from "../Link"
import cx from "classnames"
import iconPlay from "../../../common_assets/images/play.raw.svg"

export default class Grid extends Component {

  gridPlay(e) {
    e.preventDefault()
    console.log("gridPlay", this._video)
    // this._video.classList.add("Video--ready")
    this._video.classList.add("Video--play")
    this._video.play()
  }

  render() {

    const classNames = cx({
      "Grid": true,
    })

    return (
			<section className={ classNames }>

				<div className="Grid-item">
          <div className="Grid-slice Grid-slice--map" />
          <div className="Grid-slice Grid-slice--baby" />
        </div>
				<article className="Grid-item Grid-item--triple Grid-item--video">
          <Link onClick={ this.gridPlay.bind(this) } className="Link--play Link--playGrid">
            <SVGInline className="Svg" svg={ iconPlay } />
          </Link>
          <video width="100%" ref={ (r) => this._video = r }
            className="Video Video--grid" preload="auto" loop
          >
            <source src="./videos/jt.mp4" type="video/mp4" />
            <source src="./videos/jt.webm" type="video/webm" />
            <source src="./videos/jt.ogv" type="video/ogg" />
          </video>
        </article>
				<div className="Grid-item Grid-item--double">
          <div className="Grid-slice Grid-slice--group" />
          <div className="Grid-slice Grid-slice--favid" />
        </div>

			</section>
    )
  }
}
