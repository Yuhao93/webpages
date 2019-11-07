const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(req.headers['user-agent']);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port);
