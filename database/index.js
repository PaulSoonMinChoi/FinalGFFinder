let LOGIN = require('./config.js');

var mysql      = require('mysql');
var db = mysql.createConnection(LOGIN);

db.connect();

db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = db;