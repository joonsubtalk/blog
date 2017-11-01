import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './o-SimpleButton.css';

class SimpleButton extends Component {

	render() {
		return (
			<button className="o-simplebutton">
				{this.props.text}
			</button>
		);
	}
}

SimpleButton.propTypes = {
	text: PropTypes.string
};

export default SimpleButton;