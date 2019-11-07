const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const userAgent = req.headers['user-agent'];
    
  res.statusCode = 200;
  
  if (userAgent.indexOf('facebookexternalhit/1.1') >= 0) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <meta property="al:android:url" content="https://www.google.com/maps/dir//Cascal,+400+Castro+St,+Mountain+View,+CA+94041/@37.3912057,-122.0832874,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808fb7339f1f74d3:0x900a28264d7b4a0b!2m2!1d-122.0810987!2d37.3912015!3e0">
          <meta property="al:android:package" content="com.google.android.apps.maps">
        </head>
      </html>`);
    return;
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port);
