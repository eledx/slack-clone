const dataAccess = require('./data-access');

const getChannels = async (_req, res) => {
  const channels = await dataAccess.getChannels();
  return res.status(200).json({ channels });
};

const getMessages = async (req, res) => {
  const channelId = parseInt(req.params.channelId);

  const messages = await dataAccess.getMessages(channelId);
  return res.status(200).json({ messages });
};

const postChannels = (req, res) => {
  const nameChannels = req.body.nameChannels;
  dataAccess.postChannels(nameChannels);
  return res.send('Bravo !');
};

module.exports = {
  getChannels,
  getMessages,
  postChannels,
};
