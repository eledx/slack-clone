const express = require('express');
const app = express();
const port = 8000;
require('dotenv').config();

const routes = require('./routes');

app.use('/api', routes);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
