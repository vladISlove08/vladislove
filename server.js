const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/log') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      fs.appendFile('logfile.log', body + '\n', function (err) {
        if (err) {
          console.error('Error writing to logfile.log:', err);
          res.statusCode = 500;
          res.end('Error writing to logfile.log');
        } else {
          console.log('Data logged to logfile.log');
          res.statusCode = 200;
          res.end('Data received and logged successfully');
        }
      });
    });
  } else if (req.url === '/' || req.url === '/index.html') {
    serveFile(res, 'index.html');
  } else if (req.url === '/style.css') {
    serveFile(res, 'style.css', 'text/css');
  } else if (req.url === '/script.js') {
    serveFile(res, 'script.js', 'application/javascript');
  } else if (req.url === '/4c6b6aae82b560505cbc71731c23494d.jpg') {
    serveFile(res, '4c6b6aae82b560505cbc71731c23494d.jpg', 'image/jpeg');
} else if (req.url === '/328acceb4366a8a8b749183dae64e23f.jpg.jpg') {
    serveFile(res, '328acceb4366a8a8b749183dae64e23f.jpg', 'image/jpeg');
} else if (req.url === '/caniuse-bg-dark.png') {
    serveFile(res, 'caniuse-bg-dark.png', 'image/png');
  } else if (req.url === '/soundEggs.mp3') { // Обслуживаем аудиофайл
    serveFile(res, 'soundEggs.mp3', 'audio/mpeg');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

function serveFile(res, filename, contentType = 'text/html') {
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
