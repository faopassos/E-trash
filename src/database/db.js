const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/database.db');

db.serialize(() => {
  // create
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );  
  `);

  // insert
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
    'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    'Colectoria',
    'Guilherme Germbala, Jardim América',
    'Numero 260',
    'Santa Catarina',
    'Rio do Sul',
    'Resíduos Eletrônicos, Lâmpadas'
  ];

  function afterInsertData(err) {
    if(err) {
      return console.log(err);
    }

    console.log('Cadastrado com sucesso');
    console.log(this);
  }

  db.run(query, values, afterInsertData);
});
