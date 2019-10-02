const controller = {
    root : (req, res) => {
        res.status(400).end();
    },

    param : {
        chand_id : (req, res, next, chan_id) => {
            //if (typeof(chan_id) == "number") {
                req.chan_id = chan_id;
                next();
            /*}

            else {
                res.status(400).end();
            }*/
        },

        msg_id : (req, res, next, msg_id) => {
            //if (typeof(msg_id) == "number") {
              req.msg_id = msg_id;
              next();
            /*}
          
            else {
              res.status(400).end();
            }*/
        },

        user_id : (req, res, next, msg_id) => {
            //if (typeof(user_id) == "number") {
              req.user_id = user_id;
            /*}
          
            else {
              res.status(400).end();
            }*/
        }
    },

    channels : {
        get : (req, res) => {
            res.json(`vous avez demande tous les channels`);
        },

        post : (req, res) => {
            const name = req.param.name;
          
            if (name) {
              res.json(`vous avez cree le channel ${name}`);
            }
          
            else {
              res.status(400).end();
            }
        },

        chan_id : {
            get : (req, res) => {
                res.json(`vous avez demande le channel ${req.chan_id}`);
            },

            put : (req, res) => {
                const name = req.param.name;
              
                if (name) {
                  res.json(`vous avez modifie le channel ${chan_id}`);
                }
              
                else {
                  res.status(400).end();
                }
            },

            delete : (req, res) => {
                res.json(`vous avez supprime le channel ${chan_id}`);
            },

            messages : {
                get : (req, res) => {
                    res.json(`vous avez demande tous les messages du channel ${chan_id}`);
                },

                post : (req, res) => {
                    msg = req.param.msg;
                  
                    if (msg) {
                      res.json(`nouveau message ajoute au channel ${chan_id} : ${msg}`);
                    }
                  
                    else {
                      res.status(400).end();
                    }
                },

                msg_id : {
                    get : (req, res) => {
                        res.json(`vous avez demande le message ${msg_id}`);
                    },

                    put : (req, res) => {
                        const msg = req.param.msg;
                      
                        if (msg) {
                          res.json(`vous avez modifier le message ${msg_id} par : ${msg}`);
                        }
                      
                        else {
                          res.status(400).end();
                        }
                    },

                    delete : (req, res) => {
                        res.json(`vous avez supprimer le message ${msg_id}`);
                    }
                }
            }
        }
    },

    users : {
        get : (req, res) => {
            res.json(`vous avez demander tous les info de tous les utilisateurs`);
        },

        post : (req, res) => {
            user = req.param.user;
          
            if (user) {
              res.json(`nouveau utilisateur ${user} creer`);
            }
          
            else {
              res.status(400).end();
            }
        },

        user_id : {
            get : (req, res) => {
                res.json(`vous avez demander les info de l'utilisateur ${user_id}`);
            },

            put : (req, res) => {
                data = req.param.data;
              
                if (data) {
                  res.json(`vous avez modifier l'utilisateur ${user_id} avec la data ${data}`);
                }
              
                else {
                  res.status(400).end();
                }
            },

            delete : (req, res) => {
                res.json(`vous avez supprimer l'utilisateur ${user_id}`);
            },

            channels : {
                get : (req, res) => {
                    res.json(`vous avez demander la liste des channels de l'utilisateur ${user_id}`)
                },

                post : (req, res) => {
                    id = req.param.id;
                  
                    if (data) {
                      res.json(`vous avez ajouter le channel ${id} a l'utilisateur ${user_id}`);
                    }
                  
                    else {
                      res.status(400).end();
                    }
                },

                chan_id : {
                    delete : (req, res) => {
                        res.json(`vous avez supprimer le channel ${chan_id} a l'utilisateur ${user_id}`);
                    }
                }
            }
        }
    }
}