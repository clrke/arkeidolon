/** @jsx React.DOM */
var React = require('react'),
	IndexPage = require('./index');

var TemplatePage = React.createClass({
	displayName: 'TemplatePage',
	propTypes: {
		page: React.PropTypes.string.isRequired
	},
	getPage: function () {
		switch(this.props.page) {
			case 'index':
				return (
					<IndexPage />
				);
			default:
				return null;
		}
	},
	render: function () {
		var page = this.getPage();
		return (
			<html>
				<head>
					<title>
						Hello World!
					</title>
				</head>
				<body>
					{page}
				</body>
			</html>
		);
	}
});

module.exports = TemplatePage;
