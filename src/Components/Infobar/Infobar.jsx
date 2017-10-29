import React, {Component} from 'react';
import propTypes from 'prop-types';
import Code from '../Code/Code';
import './o-Infobar.css';


class Infobar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="o-infobar u-triplePaddingSpacing">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							{ this.props.info }
						</div>
						<div className="col-md-6">
							<Code />
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