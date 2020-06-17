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

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  return res.render('index.html');
});

server.get('/create-point', (req, res) => {
  // console.log(req.query);

  return res.render('create-point.html');
});

server.post('/savepoint', (req, res) => {
  
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ];

  function afterInsertData(err) {
    if(err) {
      return console.log(err);
    }

    console.log('Cadastrado com sucesso');
    console.log(this);

    return res.send('ok');
  }

  db.run(query, values, afterInsertData);
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
