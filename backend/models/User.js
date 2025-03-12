const User = {
  createUser: 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
  findUserByPhone: 'SELECT * FROM users WHERE phone = ?'
};
module.exports = User;
