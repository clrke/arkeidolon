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
					<link rel="stylesheet" type="text/css"
						href="/foundation.css" />
					<link rel="stylesheet" type="text/css"
						href="/animate.css" />
				</head>
				<body>
					{page}
					<script type="text/javascript" src="/renderer"></script>
				</body>
			</html>
		);
	}
});

module.exports = TemplatePage;
