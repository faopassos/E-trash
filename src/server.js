const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// config template engine
nunjucks.configure('src/viewer', {
  express: server,
  noCache: true
});

// config static files
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('index.html');
});

server.get('/create-point', (req, res) => {
  res.render('create-point.html');
});

server.listen(3000);
