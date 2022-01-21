const http = require('http');
const fs = require('fs');
const { SERVER_PORT, SERVER_HOST_NAME } = require('./utils/config');
const path = require('path/posix');

/*================== Loading Files  ========================*/
const columnPreview = fs.readFileSync(
  `${path.join(__dirname)}/src/views/3-column-preview.html`,
  'utf-8'
);

// 1 => Create a Server
const server = http.createServer((req, res) => {
  // Respond to the request sent => with a status and setHeader
  //   res.statusCode = 200;
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(columnPreview);
});

// 2 => Listen for connectiON
server.listen(SERVER_PORT, SERVER_HOST_NAME, () => {
  console.log(
    `Server running on at http://${SERVER_HOST_NAME}:${SERVER_PORT}/`
  );
});
