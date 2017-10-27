import React from 'react';
import PropTypes from 'prop-types';
import './o-Card.css';

const Card = (props) => (
    <div className="o-card">
        <div className="o-card__image"><img src={props.image}/></div>
        <div className="o-card__text">{props.text}</div>
    </div>
);

Card.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Card;