import React from 'react';
import './c-Footer.css';

const Footer = () => (
    <footer className="c-footer">
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col-md-4">
                        Menu
                        <ul>
                            <li>something</li>
                            <li>something</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        Follow
                        <ul>
                            <li>something</li>
                            <li>something</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        Get Started
                        <ul>
                            <li>something</li>
                            <li>something</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="cpl-sm-12">
                        Something should go here.
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;