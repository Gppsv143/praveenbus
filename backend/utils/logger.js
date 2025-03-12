const fs = require('fs');

module.exports = (message) => {
  fs.appendFileSync('logs.txt', `${new Date().toISOString()} - ${message}\n`);
};
