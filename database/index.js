const mysql = require('mysql');
const LOGIN = require ('./config.js');
const connection = mysql.createConnection(LOGIN);
connection.connect();
connection.query('SELECT 1 + 1 AS solution', (err, rows) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('The solution is: ', rows[0].solution);
});
module.exports = connection;