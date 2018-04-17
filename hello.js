var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Ceci est un test 5 !\n');
}).listen(process.env.PORT || 8080, '0.0.0.0');
console.log('Server running at http://0.0.0.0/');
