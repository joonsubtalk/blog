import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Divider.css';

class Divider extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="o-divider u-doublePaddingSpacing">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="o-divider__title">
								Ready to make an impact?
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Divider;