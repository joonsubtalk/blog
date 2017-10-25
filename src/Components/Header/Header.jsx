import React from 'react';
import './c-Header.css';

const Header = (props) => (
	<header className="o-header">
		<div className="o-header__content">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						Joonsub.com
					</div>
					<div className="col-sm-6">
						Who What When
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;