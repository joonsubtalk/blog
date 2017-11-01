import React, {Component} from 'react';
import propTypes from 'prop-types';
import SimpleButton from '../Button/SimpleButton';
import Card from '../Card/Card';
import './o-Experience.css';

import ucla from '../../img/ucla-logo.svg';
import mt from '../../img/mt-logo.svg';
import zazzle from '../../img/zazzle-logo.svg';

class Experience extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="o-experience">
				<div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header className="">
                                <div className="">Experiences</div>
                                <h2 className="">I've Worked At / Recent Projects</h2>
                            </header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Card text="UCLA, Los Angeles"
                                bg="#3284BF"
                                logo={ucla}
                            />
                        </div>
                        <div className="col-md-4">
                            <Card text="Zazzle, Redwood City"
                                bg="#46c3e0"
                                logo={zazzle}
                            />
                        </div>
                        <div className="col-md-4">
                            <Card text="Mediatemple, Los Angeles" 
                                bg="#48e0a4"
                                logo={mt}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 u-doubleTopMargin o-experience__call-to-action">
                            <SimpleButton text="See More" />
                        </div>
                    </div>
                </div>
			</section>
		);
	}
}

export default Experience;