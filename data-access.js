// const pg = require('pg');
// const express = require('express');

// const app = express();

// const router = express.Router();
const getChannels = async () => {
  const channels = await pool.query('SELECT * FROM channel ORDER BY id ASC');
  console.log(channels);
  return channels;
};
const pool = require('./db_pool');

module.exports = router;
