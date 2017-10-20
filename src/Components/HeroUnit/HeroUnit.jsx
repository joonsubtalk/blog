import React, {Component} from 'react';
import propTypes from 'prop-types';
import renderhtml from 'react-render-html';
import './c-HeroUnit.css';

class HeroUnit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            someContent : '',
            requestFailed: false
        };
    }

    componentDidMount(){
        fetch('http://www.joonsub.com/site/wordpress/wp-json/wp/v2/pages/4')
        .then(response => {
            if (!response.ok) {
            throw Error("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            this.setState({
            someContent: d.work
            })
        }, () => {
            this.setState({
            requestFailed: true
            })
        })
    }

    bleh() {
        var something = this.state.someContent;

        return renderhtml(something !== undefined ? something :'' );
    }

    render() {
        return (
            <div className="c-herounit">
                <div className="c-herounit__content">  
                   {this.bleh()}   
                </div>
            </div>
        );
    }
}

HeroUnit.propTypes = {
    name: propTypes.string
};

export default HeroUnit;