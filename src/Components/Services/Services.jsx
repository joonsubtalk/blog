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
					<div className="grid">
						<div className="row">
							<div className="col-md-12">
								Hi, all
							</div>
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