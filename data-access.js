const pool = require('./db_pool');

const getChannels = async () => {
  const channels = await pool.query('SELECT * FROM channel ORDER BY id ASC');
  return channels.rows;
};

const getMessages = async channelId => {
  const messages = await pool.query(
    `SELECT * FROM message WHERE id_chan = $1`,
    [channelId]
  );
  return messages.rows;
};

const postChannels = nameChannels => {
  pool.query(`INSERT INTO channel (name) VALUES ($1)`, [nameChannels]);
};

module.exports = {
  getChannels,
  getMessages,
  postChannels,
};
