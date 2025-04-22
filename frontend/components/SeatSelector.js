const SeatSelector = ({ seats }) => (
  <div className="seat-selector">
    {seats.map((seat, index) => (
      <button key={index} className="seat-button">
        {seat}
      </button>
    ))}
  </div>
);

export default SeatSelector;
