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

const postMessages = (channelId, contentMessages) => {
  pool.query(`INSERT INTO message (id_chan, content) VALUES ($1, $2)`, [
    channelId,
    contentMessages,
  ]);
};

module.exports = {
  getChannels,
  getMessages,
  postChannels,
  postMessages,
};
