// models/User.js (using MySQL pool instead of Sequelize)

const bcrypt = require('bcryptjs');

// Example function to create a user
async function createUser(phone, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (phone, email, password) VALUES (?, ?, ?)';
  await global.db.execute(sql, [phone, email, hashedPassword]);
}

// Example function to find user by phone or email
async function findUserByPhoneOrEmail(phoneOrEmail) {
  const sql = 'SELECT * FROM users WHERE phone = ? OR email = ? LIMIT 1';
  const [rows] = await global.db.execute(sql, [phoneOrEmail, phoneOrEmail]);
  return rows.length > 0 ? rows[0] : null;
}

module.exports = {
  createUser,
  findUserByPhoneOrEmail,
};

