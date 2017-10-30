import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Services.css';

class Services extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-services">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<header className="">
								<div className="">My Life For Hire</div>
								<h2 className="">Who Am I?</h2>
							</header>
						</div>
					</div>
					<div className="row">
						Package 
						<ul>
							<li>CSS BEM Model (Styled efficiently for future developers)</li>
							<li>Initial Wireframe mockup</li>
							<li>Grid system (Basic visual guidelines)</li>
							<li>HTML5 (Optimized for the web)</li>
							<li>ES Linted JS (Clean and modernized javascript for interactions)</li>
							<li>SEO (Search Engine Optimization)</li>
							<li>Minimize assets (Faster page loads and save bandwidth)</li>
							<li>Unit tests (Add tests to each page module)</li>
							<li>Browser compatibility (Make sure your visitors from Chrome to Safari all see the page you want them to see)</li>
							<li>Google Analytics Setup (Good for statistical inferences)</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

Services.PropTypes = {
	info: propTypes.string.isRequired
}

export default Services;