var http = require('http'),
	fs = require('fs');

http.createServer(function (request, response) {
	fs.readFile('./index.html', function readFile (err, html) {
		if(err) {
			throw err;
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(html);
	});
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
