const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// config template engine
nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

// config static files
server.use(express.static('public'));

server.get('/', (req, res) => {
  return res.render('index.html');
});

server.get('/create-point', (req, res) => {
  return res.render('create-point.html');
});

server.get('/search', (req, res) => {
  return res.render('search-results.html');
});

server.listen(3000);
