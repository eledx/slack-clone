const router = require('express').Router();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller');
const port = 8000;
require('dotenv').config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

router.get('/messages', (req, res) => {
  res.json(
    (messages = [
      {
        id: '0123',
        channelId: '123',
        text: 'first message from channel 1',
        createdAt: '03/10/2019',
      },
      {
        id: '1123',
        channelId: '123',
        text: 'message2 from channel 1',
        createdAt: '03/10/2019',
      },
      {
        id: '0234',
        channelId: '234',
        text: 'first message from channel 2',
        createdAt: '05/10/2019',
      },
      {
        id: '0235',
        channelId: '234',
        text: 'hello from channel 2',
        createdAt: '05/10/2019',
      },
    ])
  );
});

// La routes du server appel une fonction du controller
router.get('/channels', controller.getFullChannels);
router.post('/channels', controller.createChannel);

module.exports = router;
