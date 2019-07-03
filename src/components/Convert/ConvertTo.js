import React from 'react';

class ConvertTo extends React.Component {
	state = {};

	componentDidMount() {
		//Todo
	}
	render() {

		const style = {
			flex: '1',
			backgroundColor: '#DADADA',
			borderLeft: '1px solid black'
		}
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
			To
			<div style={container}>
				<div style={containerChild}></div>
				<div style={containerChild}></div>
				<div style={containerChild}></div>
			</div>
		</div>	
		);
	}
}

export default ConvertTo;