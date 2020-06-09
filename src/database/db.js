const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// db.serialize(() => {
  // create
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );  
  // `);

  // // insert
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?, ?, ?, ?, ?, ?, ?);
  // `;

  // const values = [
  //   'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
  //   'PaperSider',
  //   'Guilherme Germbala, Jardim América',
  //   'Numero 260',
  //   'Santa Catarina',
  //   'Rio do Sul',
  //   'Resíduos Eletrônicos, Lâmpadas'
  // ];

  // function afterInsertData(err) {
  //   if(err) {
  //     return console.log(err);
  //   }

  //   console.log('Cadastrado com sucesso');
  //   console.log(this);
  // }

  // db.run(query, values, afterInsertData);

  // db.all(`SELECT * FROM places`, function(err, rows) {
  //   if(err) {
  //     return console.log(err);
  //   }

  //   console.log('Seus registtros:');
  //   console.log(rows);
  // });

  // delete
  // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
  //   if(err) {
  //     return console.log(err);
  //   }

  //   console.log('Registro removido com sucesso');
  // });
// });
