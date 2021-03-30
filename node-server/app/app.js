'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(Date.now().toString());
  res.sendStatus(200); 
});

app.get('/web', (req, res) => {
  res.send(Date.now().toString());
  res.sendStatus(200); 
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);