const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const userAgent = req.headers['user-agent'];
    
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/html');
  res.end(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui">
        </head>
        <body>
          <style>
            html { height: 100% }
            body { height: 100%, background-color: blue; }
          </style>
        </body>
      </html>`);
});

server.listen(port);
