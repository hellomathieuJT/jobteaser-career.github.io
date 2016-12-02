import React, { Component } from "react"
import SVGInline from "react-svg-inline"
import Header from "../Header"
import Section from "../Section"
import Wrapper from "../Wrapper"
import Title from "../Title"
import Link from "../Link"
import Image from "../Image"
import Text from "../Text"
import Grid from "../Grid"
import Offers from "../../container/Offers"
import Values from "../../container/Values"
import iconPlay from "../../../common_assets/images/play.raw.svg"
import iconRocket from "../../../common_assets/images/rocket.raw.svg"
import iconSpotify from "../../../common_assets/images/spotify.raw.svg"
import cx from "classnames"

export default class HomeLayout extends Component {

  constructor(props) {
    super(props)
    // this.onResize = this.onResize.bind(this)
    this.heroPlay = this.heroPlay.bind(this)
  }

  // componentDidMount() {
  // 	window.addEventListener("resize", this.onResize)
  //   this.onResize()
  // }

  // onResize() {
  // 	this._heroVideo.style.width = window.innerWidth
  // }

  heroPlay(e) {
    e.preventDefault()
    this._heroVideo.classList.add("Video--heroPlay")
    this._heroVideo.play()
  }

  render() {

    const classNames = cx({
      "Page": true,
    })

    return (
			<div className={ classNames }>

				<Header />

				<Section className="Section Section--noCentered Section--hero">
					<Wrapper className="Wrapper--centered Wrapper--columnFlow">
						<Title tag="h1" className="Title--hero Title--white">
							Join our tribe.
						</Title>
						<Link onClick={ this.heroPlay } className="Link--play">
							<SVGInline className="Svg" svg={ iconPlay } />
						</Link>
					</Wrapper>
					<video width="100%" ref={ (r) => this._heroVideo = r }
  className="Video Video--hero" preload="auto" loop controls
					>
						<source src="./videos/dev.mp4" type="video/mp4" />
						<source src="./videos/dev.webm" type="video/webm" />
						<source src="./videos/dev.ogv" type="video/ogg" />
					</video>
				</Section>

				<Section className="Section Section--text">
					<Wrapper className="Wrapper--wide">
						<Image className="Image--withText" src="./images/our-mission.jpg" />
						<Text>
							<Title tag="h1" className="Title--normal"> Our mission </Title>
							<p>
								We believe that after a bachelor or a master degree,
								students are still not able to find the job they truly want,
								or fit their personality at best. <br/>
								Here at JobTeaser, we created a platform to help them follow their
								dream and make the best professionnal decisions they can make.
								It's called the Career Center by JobTeaser
							</p>
						</Text>
					</Wrapper>
				</Section>

				<Section className="Section Section--columns">
					<Wrapper className="Wrapper--wide">
						<Text className="Text--centered Text--baselined">
							<Title tag="h1" className="Title--normal Title--centered Title--features">
								Single Sign On
							</Title>
							<p> SSO on more than 130 active schools. <br/>
							Multiple protocols support (SAML, CAS, LDAP...) </p>
						</Text>

						<Text className="Text--centered Text--baselined">
							<Title tag="h1" className="Title--normal Title--centered Title--features">
								Content recommendation
							</Title>
							<p> Job Offers targeting <br/>
							Events recommendation <br/>
							Curated newsletters</p>
						</Text>

						<Text className="Text--centered Text--baselined">
							<Title tag="h1" className="Title--normal Title--centered Title--features">
								JobCrawler
							</Title>
							<p>111 active jobboard crawlers <br/>
							10 000 crawled job offers by month <br/>
							Dynamic mapping on position and <br/>
							contract type using machine learning</p>
						</Text>
					</Wrapper>
					<SVGInline className="Svg Svg--rocket" svg={ iconRocket } />
				</Section>

				<Grid />

				<Section className="Section Section--text">
					<Wrapper className="Wrapper--wide">
						<Text className="Text--centered">
							<Title tag="h1" className="Title--normal">
								Our Tech organization
							</Title>
							<p> We work as Squads of 2-4 people, on great projects,
							with a flat management model. <br/>
							We trust our developers, and believe that a happy developer
							is a performer. </p>
						</Text>
					</Wrapper>
					<SVGInline className="Svg Svg--spotify" svg={ iconSpotify } />
				</Section>

				<Section className="Section Section--text">
					<Wrapper className="Wrapper--wide">
						<Image className="Image--withText" src="./images/our-stack.jpg" />
						<Text>
							<Title tag="h1" className="Title--normal"> Our stack </Title>
							<p> Ruby on Rails - MySQL - React - Docker -
							Elasticsearch - Sinatra - Postgres - AWS - RedShift -
							Firehose(Kinesis) - Terraform - Python - React Native </p>
						</Text>
					</Wrapper>
				</Section>

				<Section className="Section">
					<Wrapper className="Wrapper--wide Wrapper--columnFlow Wrapper--offers">
						<Title tag="h2" className="Title--normal Title--offers">
							Our current engineer job openings in Paris
						</Title>
						<Offers />
						<Link className="Link--more Link--noDecoration"
  href="https://www.jobteaser.com/fr/entreprises/jobteaser/offres-emploi-stage"
						>
							View all offers
						</Link>
					</Wrapper>
				</Section>

				<Section className="Section Section--values">
					<Wrapper className="Wrapper--wide">
						<Title tag="h2" className="Title--normal Title--hidden">
							Our values
						</Title>
						<Values />
					</Wrapper>
				</Section>

			</div>
    )
  }
}
