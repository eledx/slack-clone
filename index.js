// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const controller = require('./controller');
// const port = 8000;
// require('dotenv').config();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({ info: 'Node.js, Express, and Postgres API' });
// });

// app.get('/messages', (req, res) => {
//   res.json(
//     (messages = [
//       {
//         id: '0123',
//         channelId: '123',
//         text: 'first message from channel 1',
//         createdAt: '03/10/2019',
//       },
//       {
//         id: '1123',
//         channelId: '123',
//         text: 'message2 from channel 1',
//         createdAt: '03/10/2019',
//       },
//       {
//         id: '0234',
//         channelId: '234',
//         text: 'first message from channel 2',
//         createdAt: '05/10/2019',
//       },
//       {
//         id: '0235',
//         channelId: '234',
//         text: 'hello from channel 2',
//         createdAt: '05/10/2019',
//       },
//     ])
//   );
// });

// // La routes du server appel une fonction du controller
// app.get('/channels', controller.getFullChannels);
// app.post('/channels', controller.createChannel);

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });


const express = require('express');
const app = express();
const port = 8000;
require('dotenv').config();

const routes = require('./routes');

app.use('/api', routes);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
