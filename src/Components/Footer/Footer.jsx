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
					<div className="grid">
						<div className="row">
							<div className="col-md-4 c-footer__section">
								Menu
								<ul className="c-footer__list">
									<li className="c-footer__item">something</li>
									<li className="c-footer__item">something</li>
								</ul>
							</div>
							<div className="col-md-4">
								Follow
								<ul className="c-footer__list">
									<li className="c-footer__item">something</li>
									<li className="c-footer__item">something</li>
								</ul>
							</div>
							<div className="col-md-4">
								Get Started
								<ul className="c-footer__list">
									<li className="c-footer__item">something</li>
									<li className="c-footer__item">something</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="c-footer__copyright">
					Joonsub.com &copy; {this.state.year}
				</div>
			</footer>
		);
	}
};

export default Footer;