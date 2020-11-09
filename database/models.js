const db = require('./index.js');

const models = {
  signup: (data, callback) => {
    db.query(`INSERT INTO users (firstname, lastname, username, email, password, region, playertype, aboutMe, profilePicture, onlineStatus, currentGame) VALUES ('${data.firstname}', '${data.lastname}', '${data.username}', '${data.email}', '${data.password}', '${data.region}', '${data.playertype}', '${data.aboutMe}', '${data.profilePicture}', '${data.onlineStatus}', '${data.currentGame}')`, (err, results) => {
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

  removeMail: (data, callback) => {
    db.query(`DELETE FROM invites WHERE senderId=${data.senderId} AND recipientId=${data.recipientId}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  removeFriends: (data, callback) => {
    db.query(`DELETE FROM addfriends WHERE id=${data.id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getMail: (data, callback) => {
    db.query(`SELECT * FROM invites WHERE recipientId=${data.id}`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFriends: (data, callback) => {
    db.query(`SELECT * FROM addfriends WHERE recipientId=${data.id}`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    })
  },

  updateUsername: (data, callback) => {
    db.query(`UPDATE users SET username = '${data.username}' WHERE email = '${data.email}'`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getUser: (data, callback) => {
    let test = `SELECT * from users, addfriends WHERE users.ID=${data.senderId}`;
    db.query(test, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getInvites: (data, callback) => {
    let test = `SELECT * from users, invites WHERE users.ID=${data.senderId} LIMIT 1`;
    db.query(test, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  acceptInvites: (data, callback) => {
    let test = `INSERT INTO acceptedInvites (senderId, recipientId) VALUES ('${data.senderId}', '${data.recipientId}')`;
    db.query(test, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  acceptFriend: (data, callback) => {
    let test = `INSERT INTO friendships (userId, friendId) VALUES ('${data.userId}', '${data.friendId}')`;
    db.query(test, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },



  // <----- JUSTINS MODELS ---->
  getGamesList: (type, callback) => {
    const queryString = `SELECT * FROM games WHERE type = '${type}' LIMIT 10;`
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFriendsList: (userId, callback) => {
    const queryString = `select * from friendships inner join users on friendships.friendId = users.ID where friendships.userId = ${userId} order by lastname;`;
    db.query(queryString, (err, results) => {
      //hi tracy
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFriendDetails: (userId, callback) => {
    const queryString = `select * from users where ID = ${userId};`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeams: (userId, callback) => {
    const queryString = `select * from teamMembers inner join teams on teamMembers.teamId = teams.ID where teamMembers.teamMemberId = ${userId} order by teamName;`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeamDetails: (teamId, callback) => {
    const queryString = `select * from teamMembers join users on teamMembers.teamMemberId=users.ID join teams on teamMembers.teamId=teams.ID where teams.ID=${teamId} order by users.lastname;`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeamLeaderInfo: (teamId, callback) => {
    const queryString = `select * from teams join users on teams.leaderId=users.ID where teams.ID=${teamId};`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

}

module.exports = models;