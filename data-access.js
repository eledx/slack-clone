const pg = require('pg');
const express = require('express');

const app = express();

const router = express.Router();
const pool = require('./db_pool');

router.get('/test', (req, res) => {
  pool.query('SELECT * FROM channel', (err, results) => {
    if (err)
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      throw res.status(500).send('Erreur lors de la récupération des employés');
    // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
    return res.status(200).json(results.rows);
  });
});

module.exports = router;
