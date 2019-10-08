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

const getPublicChannels = async () => {
  const channels = await pool.query(`
    SELECT * FROM channel
    WHERE is_public = 'true'
  `);
  return channels.rows;
};

const getUserPrivateChannels = async userId => {
  const channels = await pool.query(`
    SELECT id, name, is_public, created_at
    FROM user_channel
    INNER JOIN channel
    ON user_channel.channel_id = channel.id
    WHERE user_id = ${userId}
  `);
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
  getPublicChannels,
  getUserPrivateChannels,
  getChannelByName,
  createChannel,
  getMessagesList,
  createMessage,
};
