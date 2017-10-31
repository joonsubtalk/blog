import React, {Component} from 'react';
import {format, compareAsc} from 'date-fns';
import './c-Footer.css';
class Footer extends Component {

	state = {
		year: ''
	};

	getCurrentYear () {
		return format(new Date(), 'YYYY');
	}

	componentDidMount() {
		this.setState({ year: this.getCurrentYear()})
	}

	render() {
		return (
			<footer className="c-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4 c-footer__section">
							<strong>Menu</strong>
							<ul className="c-footer__list">
								<li className="c-footer__item">Home</li>
								<li className="c-footer__item">About</li>
								<li className="c-footer__item">Pricing</li>
								<li className="c-footer__item">Quality</li>
							</ul>
						</div>
						<div className="col-md-4">
							<strong>Follow</strong>
							<ul className="c-footer__list">
								<li className="c-footer__item">LinkedIn</li>
								<li className="c-footer__item">Github</li>
								<li className="c-footer__item">Strava</li>
							</ul>
						</div>
						<div className="col-md-4">
							<strong>Get Started</strong>
							<ul className="c-footer__list">
								<li className="c-footer__item">something</li>
								<li className="c-footer__item">something</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="c-footer__copyright">
					Copyrights &copy; {this.state.year} All Rights Reserved by Joonsub.com
				</div>
			</footer>
		);
	}
};

export default Footer;