/** @jsx React.DOM */
var React = require('react');

var IndexPage = React.createClass({
	getInitialState: function () {
	    return {
	        i: 1,
	    };
	},
	handleClick: function () {
		this.setState({i: this.state.i+1});
	},
    displayName: 'IndexPage',
    render: function () {
        return (
        	<div className="row">
        		<div className="panel animated fadeInDown">
					<h1> Hello! Welcome to my blog site! </h1>
					<button onClick={this.handleClick}
						className="button">
						Click Me!
					</button>
					{this.state.i}
				</div>
			</div>
        );
    }
});

module.exports = IndexPage;
