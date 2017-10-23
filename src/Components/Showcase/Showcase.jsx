import React, {Component} from 'react';
import propTypes from 'prop-types';
import './o-Showcase.css';

class Showcase extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="o-showcase">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col-md-6">
                                <header className="">
                                    <div className="">Introductions</div>
                                    <h2 className="">Who Am I?</h2>
                                </header>
                                <p className="u-lead">
                                Before moving to the Bay Area in 2014, I was living in Los Angeles 
During my four years at UCLA, I also worked as a product

I love biking cooking and I bought a Trek 2.1 Pilot and you'll
You can find me at @cjsub or joonsubtalk@gmail.com


                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium ullam cumque sint sed enim modi at numquam reprehenderit, amet vero ratione nemo odio magnam itaque nihil debitis dolore perspiciatis!
                                </p>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;