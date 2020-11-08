const models = require('../database/models.js');

const controllers = {
  signup: (req, res) => {
    models.signup(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json('SUCCESSFUL SIGN UP');
      }
    })
  },

  checkSignUp: (req, res) => {
    models.checkSignUp(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  checkLogIn: (req, res) => {
    models.checkLogIn(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  updatePicture: (req, res) => {
    models.updatePicture(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  removeMail: (req, res) => {
    models.removeMail(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  removeFriends: (req, res) => {
    models.removeFriends(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  updateUsername: (req,res) => {
    models.updateUsername(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getMail: (req,res) => {
    models.getMail(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getFriends: (req,res) => {
    models.getFriends(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getUser: (req, res) => {
    models.getUser(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getInvites: (req, res) => {
    models.getInvites(req.query, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  acceptInvites: (req, res) => {
    models.acceptInvites(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  acceptFriend: (req, res) => {
    models.acceptFriend(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },


};

module.exports = controllers;