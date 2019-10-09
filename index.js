const express = require('express');
const app = express();
const pool = require('./db_pool');
const routes = require('./routes');
require('dotenv').config();

const morgan = require('morgan');
const bodyParser = require('body-parser');
// Middlewares
app.use(morgan('dev'));
// Body Parser configuration

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use('/api', routes);

app.listen(8000, function() {
  console.log('Example app listening on port 127.0.0.1:8000');
});

module.exports = app;
