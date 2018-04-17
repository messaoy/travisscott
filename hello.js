var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis is working!\n');
}).listen(process.env.PORT || 8080, '0.0.0.0');
console.log('Server running at http://0.0.0.0/');
