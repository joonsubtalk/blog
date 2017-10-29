import React, {Component} from 'react';
import propTypes from 'prop-types';
import './c-Code.css';

class Code extends Component {

	constructor(props) {
        super(props);
        
        this.state = {code: [
            {tabSpace:0, code:"..."},
            {tabSpace:0, code:"// This is a comment"},
            {tabSpace:0, code:"class App extends Component {"},
            {tabSpace:1, code:"const data = {"},
            {tabSpace:2, code:"name: \"also cool\""},
            {tabSpace:2, code:"date: \"something\""},
            {tabSpace:1, code:"}"},
            {tabSpace:0, code:""},
            {tabSpace:1, code:"function makeWebsite() {"},
            {tabSpace:2, code:"... do magic"},
            {tabSpace:1, code:"}"},
            {tabSpace:0, code:"}"},
            {tabSpace:0, code:"..."},
        ]};
    }

    renderCodeMarkup() {
        let lineNumber = 32;
        return (<ul className="c-code__list">{this.state.code.map((codeLine) => {
            return (<li key={lineNumber++} className="c-code__line">
                    <span className="c-code__line-number">{lineNumber}</span>
                    <span className={`c-code__space-${codeLine.tabSpace}`}>{codeLine.code}</span>
                </li>)
        })}
        </ul>)
    }

	render() {
		return (
			<div className="c-code">
                {this.renderCodeMarkup()}
			</div>
		);
	}
}

export default Code;