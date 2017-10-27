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
An LA native.
A hearthstone


							Before moving to the Bay Area in 2014, I was living in Los Angeles 
During my four years at UCLA, I also worked as a product

I love cycling, cooking and I bought a Trek 2.1 Pilot and you'll
You can find me at @cjsub or joonsubtalk@gmail.com


							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium ullam cumque sint sed enim modi at numquam reprehenderit, amet vero ratione nemo odio magnam itaque nihil debitis dolore perspiciatis!
							</p>
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