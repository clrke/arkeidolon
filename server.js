require('node-jsx').install({extension: '.jsx'});

var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	React = require('react/addons'),
	TemplatePage = require('./react_components/pages/template');

http.createServer(function (request, response) {
	var route = url.parse(request.url);

	switch(route.path) {
		case '/':
			fs.readFile('./index.html', function readFile (err, html) {
				if(err) {
					throw err;
				}
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(React.renderToStaticMarkup(
					React.createElement(TemplatePage,
					{
						page: 'index'
					})
				));
			});
			break;
		case '/renderer':
			fs.readFile('./src/renderer.js', function readFile (err, script) {
				if(err) {
					throw err;
				}
				response.writeHead(200, {'Content-Type': 'text/javascript'});
				response.end(script);
			});
			break;
		case '/foundation.css':
			fs.readFile('./src/foundation/css/foundation.min.css',
					function readFile (err, css) {
				if(err) {
					throw err;
				}
				response.writeHead(200, {'Content-Type': 'text/css'});
				response.end(css);
			});
			break;
		case '/animate.css':
			fs.readFile('./src/animate.css',
					function readFile (err, css) {
				if(err) {
					throw err;
				}
				response.writeHead(200, {'Content-Type': 'text/css'});
				response.end(css);
			});
			break;
		default:
			response.writeHead(404, {'Content-Type': 'text/text'});
			response.end('404 page not found');
	}
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
