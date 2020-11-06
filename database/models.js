const db = require('./index.js');

const models = {
  signup: (data, callback) => {
    db.query(`INSERT INTO users (firstname, lastname, username, email, password, region, playertype, aboutMe, profilePicture, onlineStatus) VALUES ('${data.firstname}', '${data.lastname}', '${data.username}', '${data.email}', '${data.password}', '${data.region}', '${data.playertype}', '${data.aboutMe}', '${data.profilePicture}', '${data.onlineStatus}')`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  checkSignUp: (data, callback) => {
    db.query(`SELECT * FROM users WHERE email='${data.email}'`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  checkLogIn: (data, callback) => {
    db.query(`SELECT * FROM users WHERE email='${data.email}' AND password='${data.password}'`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  updatePicture: (data, callback) => {
    db.query(`UPDATE users SET profilePicture = '${data.profilePicture}' WHERE email = '${data.email}'`, (err, results) => {
      console.log(results);
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  // removeMail: (data, callback) => {
  //   db.query(`DELETE FROM users WHERE id=${data.id}`, (err, results) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, results);
  //     }
  //   })
  // },

  updateUsername: (data, callback) => {
    db.query(`UPDATE users SET username = '${data.username}' WHERE email = '${data.email}'`, (err, results) => {
      console.log(results);
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

}

module.exports = models;