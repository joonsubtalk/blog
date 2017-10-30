import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Showcase.css';
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
								I started creating websites since the early 2000's.
								My combined interest in coding and fascination for the arts allowed me to pursue my passion as a web developer.
								Currently, I'm enjoying developing webites and native apps.
							</p>
							<p>
								I'm an LA Native, a proud Bruin, and love watching college football.
								When I'm not coding, I'm probably <a href="https://www.strava.com/athletes/9591001">cycling</a> through the SoCal ocean breeze.
							</p>
							{ /* Loves tinkering with the latest technology like the <a href="http://newsroom.ucla.edu/stories/an-eye-on-the-future-of-storytelling">google glass</a>. */}
						</div>
						<div className="col-md-6">					
							<div className="o-showcase__image-container">
								<img className="o-showcase__image"src={profile}/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Showcase;