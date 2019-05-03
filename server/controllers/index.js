var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.sendStatus(404);
        }

        res.json(results);
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = [req.body.username, req.body.roomname, req.body.message];

      models.messages.post(message, (err, result) => {
        if (err) {
          res.status(400);
        }

        res.json(result);
      })


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { 
      models.users.get((err, result) => {
        if (err) {
          console.log('error')
        }
      res.json(result);
      })
    },
    post: function (req, res) { 
      // var message = [req.body.username];

      models.users.post(req.body.username, (err, result) => {
        if (err) {
          res.sendStatus(400);
        }

        res.json(result);
      })
    }
  }
};

//module.exports.messages.get(req, res)