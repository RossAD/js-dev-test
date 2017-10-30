'use strict';

const express = require('express');
const app = express();
const manifest = require('./manifest.json');

app.get('/manifest', (req, res) => {
  res.status(200).send(manifest);
});

module.exports = app;
