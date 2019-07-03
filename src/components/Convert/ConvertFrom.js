import React from 'react';

class ConvertFrom extends React.Component {
	state = {};

	componentDidMount() {
		//Todo
	}
	render() {
		const style = {
			flex: '1',
			backgroundColor: '#DADADA',
			height: '300px'
		};
		const container = {
			border: '1px solid black',
			height: '100px',
			display: 'flex'
		};
		const containerChild = {
			border: '1px solid black',
			flex: '1'
		};
		return (
		<div style={style}>
			From
			<div style={container}>
				<div style={containerChild}></div>
				<div style={containerChild}>Price</div>
			</div>
		</div>	
		);
	}
}

export default ConvertFrom;