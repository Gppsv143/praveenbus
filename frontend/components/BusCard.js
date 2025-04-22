const BusCard = ({ bus }) => (
  <div className="bus-card">
    <h3>{bus.name}</h3>
    <p>Seats Available: {bus.seats}</p>
    <p>Price: ${bus.price}</p>
    <button className="book-button">Book Now</button>
  </div>
);

export default BusCard;
