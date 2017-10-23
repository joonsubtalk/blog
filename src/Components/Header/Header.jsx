import React from 'react';
import './c-Header.css';

const Header = (props) => (
	<header className="o-header">
		<div className="o-header__content">
			<div className="grid container">
				<div className="row">
					<div className="col-md-6">
						Joonsub.com
					</div>
					<div className="col-md-6">
						Who What When
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;