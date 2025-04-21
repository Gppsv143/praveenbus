const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'busappdb.cpog4ywws338.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Naidu123',
  database: 'praveenbus', // Change if your DB name is different
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;

