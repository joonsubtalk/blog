import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Services.css';
import Card from '../Card/Card';

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
						<div className="col-md-12">
							Standard Package
							<ul className="o-service__list">
								<li className="o-service__item">Wireframes</li>
								<li className="o-service__item">CSS BEM Methodology</li>
								<li className="o-service__item">Grid system</li>
								<li className="o-service__item">Optimized HTML5</li>
								<li className="o-service__item">ES Linted JS</li>
								<li className="o-service__item">SEO</li>
								<li className="o-service__item">Minified assets</li>
								<li className="o-service__item">Unit tested JS</li>
								<li className="o-service__item">Browser compatibility</li>
								<li className="o-service__item">Google Analytics Setup</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<Card text="UCLA, Los Angeles"
								bg="#3284BF"
							/>
						</div>
						<div className="col-md-6">
							<Card text="Zazzle, Redwood City"
								bg="#46c3e0"
							/>
						</div>
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