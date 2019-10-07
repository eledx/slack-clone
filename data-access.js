const pg = require('pg');
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;

// Pool qui provient de postGres permet de requeter sur la base
// et prend en parametre une connectionString qu'on defini dans le .env
const pool = new pg.Pool({
  connectionString: databaseUrl,
});

// Requête sur la base de donnée

const getFullChannels = async () => {
  // different exemple d'utilisation https://node-postgres.com/api/pool
  const channels = await pool.query('SELECT * FROM channel ');
  return channels.rows;
};

const getChannelByName = async name => {
  const channel = await pool.query('SELECT * FROM channel WHERE name = $1', [
    name,
  ]);

  return channel.rows[0];
};

const createChannel = name => {
  pool.query('INSERT INTO channel (name) VALUES ($1)', [name]);
};

// const getMessagesList = channelId => {
//   // different exemple d'utilisation https://node-postgres.com/api/pool
//   const channels = await pool.query(`SELECT message FROM channel WHERE id= ${channelId} `);
//   return channels.rows;
// };

module.exports = {
  getFullChannels,
  getChannelByName,
  createChannel,
  // getMessagesList,
};
