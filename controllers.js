const dataAccess = require('./data-access');

const getChannels = async (_req, res) => {
  const channels = await dataAccess.getChannels();
  console.log('channels controller: ', channels);
  return res.status(200).json({ channels });
};

const getMessages = async (req, res) => {
  console.log('request : ', typeof req.params.channelId);
  const channelId = parseInt(req.params.channelId);
  console.log('request : ', typeof channelId);

  const messages = await dataAccess.getMessages(channelId);
  console.log('messages controller: ', messages);
  return res.status(200).json({ messages });
};

module.exports = {
  getChannels,
  getMessages,
};
