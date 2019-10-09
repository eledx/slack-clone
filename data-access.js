const pool = require('./db_pool');

const getChannels = async () => {
  const channels = await pool.query('SELECT * FROM channel ORDER BY id ASC');
  console.log('channel DataAccess', channels);
  return channels.rows;
};

const getMessages = async (channelId) => {
  console.log("channelId", channelId)
  const messages = await pool.query(`SELECT * FROM message WHERE id_chan = $1`,[channelId]);
  console.log('channel DataAccess', messages);
  return messages.rows;
};

module.exports = {
  getChannels,
  getMessages,
};
