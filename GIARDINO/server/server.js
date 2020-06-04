const express = require('express');

const app= express();

const path = require('path');
const http = require('http');
const flowers = require('./fiori.json'); //Copia il file people.json dentro la variabile people



var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

app.get('/api', (req, res) => {
  var jsonData = flowers.Fiore;
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});
