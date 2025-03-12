const Booking = {
  createBooking: 'INSERT INTO bookings (user_id, bus_id, seat_number, travel_date) VALUES (?, ?, ?, ?)',
  getUserBookings: 'SELECT * FROM bookings WHERE user_id = ?'
};
module.exports = Booking;
