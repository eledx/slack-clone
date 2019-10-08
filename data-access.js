const pg = require('pg');
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString: databaseUrl,
});

// CHANNELS

const getAllChannels = async () => {
  const channels = await pool.query('SELECT * FROM channel');
  return channels.rows;
};

const getChannelByName = async name => {
  const channel = await pool.query(
    `SELECT * FROM channel WHERE name = '${name}'`
  );
  return channel.rows[0];
};

const createChannel = name => {
  // For now, every new channel is public
  // TODO: 
  // - on create, if user is logged in, assign channel to this user
  // - on create, define public/private status
  pool.query(`INSERT INTO channel (name, is_public) VALUES ('${name}','true')`);
};

// MESSAGES

const getMessagesList = async channelId => {
  const messages = await pool.query(
    `SELECT * FROM message WHERE channel_id=${channelId} `
  );
  return messages.rows;
};

const createMessage = (message, channelId) => {
  // For now, every new message is linked to first app_user (id = 1)
  // TODO: on create, assign message to a user or define it as an anonymous message
  pool.query(
    `INSERT INTO message (text,channel_id, user_id) VALUES ('${message}', '${channelId}', 1)`
  );
};

module.exports = {
  getAllChannels,
  getChannelByName,
  createChannel,
  getMessagesList,
  createMessage,
};
