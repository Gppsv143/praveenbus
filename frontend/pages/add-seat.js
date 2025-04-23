import { useState } from 'react';

const AddSeat = () => {
  const [seatDetails, setSeatDetails] = useState({ seatNumber: '', price: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit seat details logic
    console.log(seatDetails);
  };

  return (
    <div>
      <h2 className="text-2xl">Add a Seat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seat Number"
          value={seatDetails.seatNumber}
          onChange={(e) => setSeatDetails({ ...seatDetails, seatNumber: e.target.value })}
          className="p-2 border"
        />
        <input
          type="number"
          placeholder="Price"
          value={seatDetails.price}
          onChange={(e) => setSeatDetails({ ...seatDetails, price: parseInt(e.target.value) })}
          className="p-2 border mt-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Add Seat</button>
      </form>
    </div>
  );
};

export default AddSeat;
