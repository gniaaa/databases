var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryStr = `SELECT messages.id, users.username, messages.roomname, messages.text 
                      FROM messages
                      INNER JOIN users ON messages.username = users.id
                      ORDER BY messages.id DESC`;
      db.query(queryStr, (err, result) => {
        if (err) { callback(err); }

        callback(null, result);
      })

    },
    // a function which can be used to insert a message into the database
    post: function (message, callback) {

      db.query('INSERT INTO messages(username, roomname, text) VALUES ((SELECT id from users WHERE username = ? limit 1), ? , ?)', message, (err, result) => {
        if (err) { callback(err, null); }
        callback(null, result);
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var message = 'SELECT * FROM users'
      db.query(message, (err, result) => {
        if (err) { callback(err); }

        callback(null, result);
      })

     },
    post: function (userName, callback) { 
      db.query('INSERT INTO users(username) VALUES (?)', userName, (err, result) => {
        if (err) { throw err; }
        callback(null, result);
      })
    }
  }
};
