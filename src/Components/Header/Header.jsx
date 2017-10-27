import React, {Component} from 'react';
import debounce from 'debounce';
import './c-Header.css';

class Header extends Component {

	constructor(props){
		super(props);
		
		
		this.state = {
			scrollHeight: 0,
			stickyHeader: false,
			SOME_MAX_HEIGHT: 100
		}

		this.handleScroll = this.handleScroll.bind(this);
		this.updateHeader = this.updateHeader.bind(this);
	}
	
    componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}
	
    componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
    }
	
    handleScroll() {
		debounce(this.updateHeader(), 200);
	}

	updateHeader() {
		this.setState({scrollHeight: window.scrollY})
		console.log(this.state.scrollHeight);
		if (this.state.scrollHeight > this.state.SOME_MAX_HEIGHT)
			console.log('go');
	}
	
	render(){
		return (
			<header className="o-header">
				<div className="o-header__content container">
					<div className="o-header__logo">Joonsub.com</div>
					<div className="o-header__nav">
						<ul className="o-header__nav-list">
							<li className="o-header__nav-item">About</li>
							<li className="o-header__nav-item">Education</li>
							<li className="o-header__nav-item">Contact</li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
};

export default Header;