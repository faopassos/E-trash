// full MVC app - fullstack developer

const express = require('express');
const nunjucks = require('nunjucks');

const db = require('./database/db');

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
  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err);
    }

    const total = rows.length;

    return res.render('search-results.html', { places: rows, total: total });
  });

});

server.listen(3000);
