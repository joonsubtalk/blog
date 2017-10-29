import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Showcase.css';
import Card from '../Card/Card';
import profile from '../../img/homepage/jsub.jpg';

class Showcase extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-showcase">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<header className="">
								<div className="">Introductions</div>
								<h2 className="">Who Am I?</h2>
							</header>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<p className="u-lead">
								Joon started creating websites since the early 2000's.
								His combined interest in coding and fascination for the arts allows him to pursue his passion as a web developer.
								Currently, he enjoys developing webites and native apps.
							</p>
							<p>
								He's an LA Native, a proud Bruin, and loves watching college football.
								When Joon's not coding, he's probably <a href="https://www.strava.com/athletes/9591001">cycling</a> next to the ocean and enjoying the breeze.
							</p>
							<p>
								<span className="lead">Hire me!</span><br />
							</p>
							{ /* Loves tinkering with the latest technology like the <a href="http://newsroom.ucla.edu/stories/an-eye-on-the-future-of-storytelling">google glass</a>. */}
						</div>
						<div className="col-md-6">					
							<div className="o-showcase__image-container">
								<img className="o-showcase__image"src={profile}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<Card image="./img/homepage/snow.jpg"
								text="I sing."
							 />
						</div>
						<div className="col-md-4">
							<Card image="../../img/homepage/snow.jpg"
								text="I dance."
							 />
						</div>
						<div className="col-md-4">
							<Card image="c"
								text="I lie."
							 />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Showcase;