import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Infobar.css';

class Infobar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="o-infobar u-triplePaddingSpacing">
				<div className="container">
					<div className="grid">
						<div className="row">
							<div className="col-md-6">
								{ this.props.info }
							</div>
							<div className="col-md-6">
								{ this.props.info }
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Infobar.PropTypes = {
	info: propTypes.string.isRequired
}

export default Infobar;