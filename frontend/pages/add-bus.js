import { useState } from 'react';

const AddBus = () => {
  const [busDetails, setBusDetails] = useState({ busName: '', type: '', seats: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit bus details logic
    console.log(busDetails);
  };

  return (
    <div>
      <h2 className="text-2xl">Add a Bus</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bus Name"
          value={busDetails.busName}
          onChange={(e) => setBusDetails({ ...busDetails, busName: e.target.value })}
          className="p-2 border"
        />
        <input
          type="text"
          placeholder="Bus Type"
          value={busDetails.type}
          onChange={(e) => setBusDetails({ ...busDetails, type: e.target.value })}
          className="p-2 border mt-2"
        />
        <input
          type="number"
          placeholder="Seats"
          value={busDetails.seats}
          onChange={(e) => setBusDetails({ ...busDetails, seats: parseInt(e.target.value) })}
          className="p-2 border mt-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBus;

