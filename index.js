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

// app.get('/', function(req, res) {
//   res.send('Hello W!');
// });
app.use('/api', routes);
// app.get('/test', (req, res) => {
//   pool.query('SELECT * FROM channel', (err, results) => {
//     if (err)
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       throw res.status(500).send('Erreur lors de la récupération des employés');
//     // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//     return res.status(200).json(results.rows);
//   });
// });

app.listen(8000, function() {
  console.log('Example app listening on port 127.0.0.1:8000');
});

module.exports = app;
