var http = require('http');

var server = http.createServer(function (req, res) {
  console.log('request');
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('你好');
});
server.listen(3000, '127.0.0.1');

console.log('服务器运行在3000端口上');
