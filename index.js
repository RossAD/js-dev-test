'use strict';

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const next = require('next');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const api = require('./api');

const client = next({ dev: NODE_ENV === 'development' });
const clientHandler = client.getRequestHandler();
const app = express();

app.use(cookieParser());
app.use(csrf({ cookie: true }));
app.disable('x-powered-by');
app.use(helmet());

client.prepare().then(() => {
  app.use('/api', api);
  app.get('*', (req, res) => clientHandler(req, res));
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  console.log('listening on port: %d', listener.address().port); //eslint-disable-line
});
