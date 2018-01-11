var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, function () {
  console.log('Server started on port ' + port);
});
