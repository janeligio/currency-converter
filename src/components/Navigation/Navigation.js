import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';



const Navigation = () => {
	return (
		<div className="navigation">
			<nav className="nav-container">
				<Link style={{borderRight:'1px solid #CCC'}}>you</Link>
				<Link style={{borderRight:'1px solid #CCC'}}>motha</Link>
				<Link>fucka</Link>
			</nav>
		</div>
	);
}

export default Navigation;