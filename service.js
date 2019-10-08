const dataAccess = require('./data-access');

const createChannelAndGetId = async name => {
  await dataAccess.createChannel(name);
  const channel = await dataAccess.getChannelByName(name);
  return channel.id;
};

const getPublicChannels = async () => {
  const channels = await dataAccess.getPublicChannels();
  return channels;
};

const getUserChannels = async userId => {
  const [publicChannels, privateChannels] = await Promise.all([
    dataAccess.getPublicChannels(),
    dataAccess.getUserPrivateChannels(userId),
  ]);

  return [...publicChannels, ...privateChannels];
};

module.exports = {
  createChannelAndGetId,
  getPublicChannels,
  getUserChannels,
};
