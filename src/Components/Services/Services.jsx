import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Services.css';

class Services extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="o-services">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							HTML
						</div>
						<div className="col-md-3">
							CSS
						</div>
						<div className="col-md-3">
							Javascript
						</div>
						<div className="col-md-3">
							PHP
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Services.PropTypes = {
	info: propTypes.string.isRequired
}

export default Services;