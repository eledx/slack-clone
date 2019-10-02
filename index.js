const express = require("express");
const app = express();
require("dotenv").config();

/* params */

// channel id param
app.param('chan_id', (req, res, next, chan_id) => {
  //if (typeof(chan_id) == "number") {
    req.chan_id = chan_id;
    next();
  /*}

  else {
    res.status(400).end();
  }*/
});


// message id param
app.param('msg_id', (req, res, next, msg_id) => {
  //if (typeof(msg_id) == "number") {
    req.msg_id = msg_id;
    next();
  /*}

  else {
    res.status(400).end();
  }*/
});

app.param('user_id', (req, res, next, user_id) => {
  //if (typeof(user_id) == "number") {
    req.user_id = user_id;
  /*}

  else {
    res.status(400).end();
  }*/
})



/* root */

app.get('/', (req, res) => {
  res.status(400).end();
})



/* /channels */

// get info of all channels
app.get('/channels', (req, res) => {
  res.json(`vous avez demande tous les channels`);
})

// create a channels with param name
app.post('/channels', (req, res) => {
  const name = req.param.name;

  if (name) {
    res.json(`vous avez cree le channel ${name}`);
  }

  else {
    res.status(400).end();
  }
})



/* /channels/:chan_id */

// get info of channel id
app.get('/channels/:chan_id', (req, res) => {
  res.json(`vous avez demande le channel ${req.chan_id}`);
});

// modify channel id
app.put('/channels/:chan_id', (req, res) => {
  const name = req.param.name;

  if (name) {
    res.json(`vous avez modifie le channel ${chan_id}`);
  }

  else {
    res.status(400).end();
  }
});

// delete channel id
app.delete('/channels/:chan_id', (req, res) => {
  res.json(`vous avez supprime le channel ${chan_id}`);
});



/* /channels/:chan_id/messages */

// get all messages from channel id
app.get('/channels/:chan_id/messages', (req, res) => {
  res.json(`vous avez demande tous les messages du channel ${chan_id}`);
})

// create a message in channel id
app.post('/channels/:chan_id/messages', (req, res) => {
  msg = req.param.msg;

  if (msg) {
    res.json(`nouveau message ajoute au channel ${chan_id} : ${msg}`);
  }

  else {
    res.status(400).end();
  }
})



/* /channels/:chan_id/messages/:msg_id */

// get message id from channel id 
app.get('/channels/:chan_id/messages/:msg_id', (req, res) => {
  res.json(`vous avez demande le message ${msg_id}`);
});

// modify message if from channel id
app.put('/channels/:chan_id/messages/:msg_id', (req, res) => {
  const msg = req.param.msg;

  if (msg) {
    res.json(`vous avez modifier le message ${msg_id} par : ${msg}`);
  }

  else {
    res.status(400).end();
  }
});

// delete message id from channel id
app.delete('/channels/:chan_id/messages/:msg_id', (req, res) => {
  res.json(`vous avez supprimer le message ${msg_id}`);
})



/* /users */

// get info from all users
app.get('/users', (req, res) => {
  res.json(`vous avez demander tous les info de tous les utilisateurs`);
})

// create a new user
app.post('/users', (req, res) => {
  user = req.param.user;

  if (user) {
    res.json(`nouveau utilisateur ${user} creer`);
  }

  else {
    res.status(400).end();
  }
})



/* /user/:user_id */

// get info from user id
app.get('/users/:user_id', (req, res) => {
  res.json(`vous avez demander les info de l'utilisateur ${user_id}`);
})

// modify a user id
app.put('/users/:user_id', (req, res) => {
  data = req.param.data;

  if (data) {
    res.json(`vous avez modifier l'utilisateur ${user_id} avec la data ${data}`);
  }

  else {
    res.status(400).end();
  }
})

// delete a user
app.delete('/users/:user_id', (req, res) => {
  res.json(`vous avez supprimer l'utilisateur ${user_id}`);
})



/* server listening */

app.listen(8000, function() {
  console.log("listening on port 8000!");
});