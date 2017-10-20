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
                                <p className="">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi deserunt ullam incidunt adipisci, cumque voluptate repellat non minus sunt corrupti animi maiores numquam unde reprehenderit? Blanditiis impedit cupiditate quis.
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