const dataAccess = require('./data-access');
const services = require('./service');

// req => request ( arguments venant du client )
// res => response ( reponse venant de la base de donnée )

// Récupere les channels
const getFullChannels = async (req, res) => {
  // On retourne dans le await le dataAccess qui lui fera la requête sur la base
  const channels = await dataAccess.getFullChannels();
  return res.status(200).json({ channels });
};

// Crée un channel
const createChannel = async (req, res) => {
  // Récuperation du name provenant du client ( webapp ) avec req.body depuis un POST
  const { name } = req.body;

  // la function permet de crée un chanel et de recupérer son id
  const channelId = await services.createChannelAndGetId(name);

  return res.status(201).send(`Channel added with ID: ${channelId}`);
};

// // Récupere les messages d'un channel
// const getMessagesFromChannel = async (req, res) => {
//   // Récuperation du channeId provenant du client ( webapp ) avec req.body
//   const { channelId } = req.body;

//   // la function permet de crée un chanel et de recupérer son id
//   const messagesList = await dataAccess.getMessagesList(channelId);

//   return res.status(201).send(`Get messages from ${channelId}`);
// };



module.exports = {
  getFullChannels,
  createChannel,
  // getMessagesFromChannel,
};
