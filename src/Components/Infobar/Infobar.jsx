import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Code from '../Code/Code';
import './o-Infobar.css';


class Infobar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-infobar">
				<div className="container o-infobar__content">
					<div className="row">
						<div className="col-md-12">
							<header className="">
								<div className="">Qualifications</div>
								<h2 className="">I Make Every Code Count</h2>
							</header>
						</div>
					</div>
					<div className="row o-infobar__col">
						<div className="col-md-6 col-md-push-6 o-infobar__code">
							<Code />
						</div>
						<div className="col-md-6 col-md-pull-6 o-infobar__copy">
							<div className="o-infobar__header">More code isn't always better code.</div>
							Quality code is critical for your app's performance and security. 
							An increase in mobile users means your site's load speed is critical for maintaining customer loyalty. 
						</div>
					</div>
				</div>
			</section>
		);
	}
}

Infobar.propTypes = {
	info: PropTypes.string.isRequired
}

export default Infobar;