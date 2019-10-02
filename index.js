const express = require("express");
const app = express();
require("dotenv").config();


/* root */

app.get('/', controller.root(req, res));


/* params */

// channel id param
app.param('chan_id', controller.param.chan_id(req, res, next, chan_id));

// message id param
app.param('msg_id', controller.param.msg_id(req, res, next, msg_id));

// user id param
app.param('user_id', controller.param.user_id(req, res, next, user_id));


/* /channels */

// get info of all channels
app.get('/channels', controller.channels.get(req, res));

// create a channels with param name
app.post('/channels', controller.channels.post(req, res));


/* /channels/:chan_id */

// get info of channel id
app.get('/channels/:chan_id', controller.channels.chan_id.get(req, res));

// modify channel id
app.put('/channels/:chan_id', controller.channels.chan_id.put(req, res));

// delete channel id
app.delete('/channels/:chan_id', controller.channels.chan_id.delete(req, res));


/* /channels/:chan_id/messages */

// get all messages from channel id
app.get('/channels/:chan_id/messages', controller.channels.chan_id.messages.get(req, res));

// create a message in channel id
app.post('/channels/:chan_id/messages', controller.channels.chan_id.messages.post(req, res));


/* /channels/:chan_id/messages/:msg_id */

// get message id from channel id 
app.get('/channels/:chan_id/messages/:msg_id', controller.channels.chan_id.messages.msg_id.get(req, res));

// modify message if from channel id
app.put('/channels/:chan_id/messages/:msg_id', controller.channels.chan_id.messages.msg_id.put(req, res));

// delete message id from channel id
app.delete('/channels/:chan_id/messages/:msg_id', controller.channels.chan_id.messages.msg_id.delete(req, res));



/* /users */

// get info from all users
app.get('/users', controller.users.get(req, res));

// create a new user
app.post('/users', controller.users.post(req, res));


/* /user/:user_id */

// get info from user id
app.get('/users/:user_id', controller.users.user_id.get(req, res));

// modify a user id
app.put('/users/:user_id', controller.users.user_id.put(req, res));

// delete a user
app.delete('/users/:user_id', controller.users.user_id.delete(req, res));


/* /user/:user_id/channels */

// get channels from user id
app.get('/users/:user_id/channels', controller.users.user_id.channels.get(req, res));

// add a channel id to user id
app.post('/users/:user_id/channels/:chan_id', controller.users.user_id.channels.post(req, res));


/* /user/:user_id/channels/:chan_id */

// delete a channel id to user id
app.delete('/users/:user_id/channels/:chan_id', controller.users.user_id.channels.chan_id.delete(req, res));


/* server listening */

app.listen(8000, function() {
  console.log("listening on port 8000!");
});