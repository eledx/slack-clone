const router = require('express').Router();
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

// CHANNELS

// TODO: - '/channels' path must point toward controller.getPublicChannels
//       - delete controller.getAllChannels
router.get('/channels', controller.getAllChannels);

// Get channels for anonymous users
router.get('/channels2', controller.getPublicChannels);
// Get channels for logged-in users
router.get('/user/:userId/channels', controller.getUserChannels);

router.post('/channels', controller.createChannel);

// MESSAGES

router.get('/channels/:channelId/messages', controller.getMessagesByChannelId);
router.post('/messages', controller.createMessage);

module.exports = router;
