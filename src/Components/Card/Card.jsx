import React from 'react';
import PropTypes from 'prop-types';
import './o-Card.css';

const Card = (props) => (
	<div className="o-card">
		<div className="o-card__image-container" style={{backgroundColor: props.bg}}><img className="o-card__image" src={props.logo}/></div>
		<div className="o-card__text">{props.text}</div>
	</div>
);

Card.propTypes = {
	bg: PropTypes.string,
	logo: PropTypes.string,
	image: PropTypes.string,
	text: PropTypes.string
};

export default Card;