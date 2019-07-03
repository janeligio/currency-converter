import React from 'react';


const headerStyle = {
  	color: 'white',
  	backgroundColor: '#001f3f',
  	fontSize: '15px',
  	padding: '1em',

}

const Header = () => {
	return (
		<header style={headerStyle} className="App-header">
    		<h1>Currency Converter</h1>
    	</header>
      		)
};

export default Header;