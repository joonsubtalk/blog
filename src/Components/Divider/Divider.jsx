import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Divider.css';

class Divider extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-divider u-doublePaddingSpacing">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="o-divider__title">
								<header className="">
									<h2>Ready To Make An Impact?</h2>
								</header>
							</div>
							<div className="o-divider__call-to-action">
								<button value="something">do it</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Divider;