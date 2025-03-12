const Bus = {
  addBus: 'INSERT INTO buses (operator_id, name, type, seats, price) VALUES (?, ?, ?, ?, ?)',
  getAllBuses: 'SELECT * FROM buses'
};
module.exports = Bus;
