import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Showcase.css';
import Card from '../Card/Card';
import profile from '../../img/homepage/emo.jpg';

class Showcase extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-showcase">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<header className="">
								<div className="">Introductions</div>
								<h2 className="">Who Am I?</h2>
							</header>
							<p className="u-lead">
								Joon started creating websites since the early 2000's.
								His fascination with programming and love for the arts has [fueled a desire to be an excellent] web developer.
								Currently, he enjoys developing with ReactJS and all things front end.
							</p>
							<p>
								He's an LA Native. A proud Bruin and loves college football.
								When Joon's not coding, he's probably <a href="https://www.strava.com/athletes/9591001">cycling</a> next to the ocean and enjoying the breeze, or owning noobs in hearthstone ladder.
							</p>
							<p>
								So what are you waiting for? Have an exciting app idea? Need a website? I'm always looking for new projects.
							</p>
							{ /* Loves tinkering with the latest technology like the <a href="http://newsroom.ucla.edu/stories/an-eye-on-the-future-of-storytelling">google glass</a>. */}
						</div>
						<div className="col-md-6">
							<img src={profile}/>
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