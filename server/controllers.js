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

  addcurrUser: (req, res) => {
    models.addcurrUser(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getcurrUser: (req, res) => {
    models.getcurrUser((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  removeMail: (req, res) => {
    models.removecurrUser(req.body, (err, results) => {
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
    models.getMail(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  }

};

module.exports = controllers;