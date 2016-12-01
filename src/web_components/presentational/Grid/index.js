import React, { Component } from "react"
import SVGInline from "react-svg-inline"
import Link from "../Link"
import cx from "classnames"
import iconPlay from "../../../common_assets/images/play.raw.svg"

export default class Grid extends Component {

  gridPlay(e) {
    e.preventDefault()
    this._video.classList.add("Video--gridPlay")
    this._video.play()
  }

  render() {

    const classNames = cx({
      "Grid": true,
    })

    return (
			<section className={ classNames }>

				<div className="Grid-item">
					<article className="Grid-slice Grid-slice--map" />
					<article className="Grid-slice Grid-slice Grid-slice--baby" />
				</div>
				<div className="Grid-item Grid-item--triple Grid-item--cursor Grid-item--video">
					<article onClick={ this.gridPlay.bind(this) } className="Grid-slice">
            <Link className="Link--play Link--playGrid">
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
				</div>
				<div className="Grid-item Grid-item--double">
					<article className="Grid-slice Grid-slice--group" />
					<article className="Grid-slice Grid-slice--favid" />
				</div>

			</section>
    )
  }
}
