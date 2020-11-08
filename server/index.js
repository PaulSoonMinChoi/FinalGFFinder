const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const cors = require('cors');
const db = require('../database/index.js');
const model = require('../database/models.js');
//hello muddah puker
const app = express();
const PORT = 3000;
app.use(cors());

app.use('/',express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);

//<----- PAULS ROUTES ----->
app.get('/users', (req, res) => {
  db.query(`SELECT * FROM users`, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  })
})

app.get('/games', (req, res) => {
  db.query(`SELECT gameName FROM games WHERE gameName LIKE '${req.query.search}%' LIMIT 7;`, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  })
})

app.post('/invites', (req, res) => {
  db.query(`INSERT INTO invites (senderId, recipientId) VALUES ('${req.body.senderId}', '${req.body.recipientId}');`, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json('SUCCESSFUL POST TO INVITES');
    }
  })
})

app.post('/addfriends', (req, res) => {
  db.query(`INSERT INTO addfriends (senderId, recipientId) VALUES ('${req.body.senderId}', '${req.body.recipientId}');`, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json('SUCCESSFUL POST TO ADDFRIENDS');
    }
  })
})

//<-----JUSTINS ROUTES ----->
app.get('/gamesList/:type', (req, res) => {
  model.getGamesList(req.params.type, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
})

//getFriends route
app.get('/getFriends/:id', (req, res) => {
  model.getFriendsList(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

//getFriendDetails route
app.get('/getFriendDetails/:id', (req, res) => {
  model.getFriendDetails(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

//getTeams route
app.get('/getTeams/:id', (req, res) => {
  model.getTeams(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

//getTeamDetails route
app.get('/getTeamDetails/:id', (req, res) => {
  model.getTeamDetails(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

//getTeamLeaderInfo route
app.get('/getTeamLeaderInfo/:id', (req, res) => {
  model.getTeamLeaderInfo(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost:${PORT}`);
})
