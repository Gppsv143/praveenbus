
import { useState } from 'react';
import axios from 'axios';

const AddBusForm = () => {
  const [busName, setBusName] = useState('');
  const [busType, setBusType] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [price, setPrice] = useState('');
  const [operatorId, setOperatorId] = useState(1); // Assuming operatorId is stored in the session or token

  const handleSubmit = async (e) => {
    e.preventDefault();

    const busData = {
      bus_name: busName,
      bus_type: busType,
      total_seats: totalSeats,
      price: price,
      operator_id: operatorId,
    };

    try {
      const response = await axios.post('/api/addBus', busData);
      if (response.status === 200) {
        alert('Bus added successfully!');
        // Optionally, reset the form
        setBusName('');
        setBusType('');
        setTotalSeats('');
        setPrice('');
      }
    } catch (error) {
      alert('Error adding bus: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Add New Bus</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bus Name:</label>
          <input
            type="text"
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bus Type:</label>
          <input
            type="text"
            value={busType}
            onChange={(e) => setBusType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Total Seats:</label>
          <input
            type="number"
            value={totalSeats}
            onChange={(e) => setTotalSeats(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
};

export default AddBusForm;
