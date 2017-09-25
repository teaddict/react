var Greeter = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Hello React!</h1>
			</div>
		);
	}
});

var Body = React.createClass({
	render: function() {
		return(
			<div>
				<p>This is new paragraph! It is body component.</p>
			</div>
		);
	}
});

var ReactExample = React.createClass({
	render: function() {
		return React.createElement(
			'h1',
			null,
			'This element created with React createElement function'
		)
	}
});


ReactDOM.render(
	<div><Greeter/><ReactExample/><Body/></div>,
	document.getElementById('app')
);