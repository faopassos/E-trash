const express = require('express');

const server = express();

server.get('/', (request, response) => {
  return response.json({ message: 'OK' });
});

server.listen(3000);
