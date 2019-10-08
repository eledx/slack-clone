const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');
require('dotenv').config();

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`);
});
