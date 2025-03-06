import React, { useState } from 'react';
import axios from 'axios';

function Search({ onResults }) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/buses', {
        params: { source, destination, date },
      });
      onResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Source" onChange={(e) => setSource(e.target.value)} />
      <input type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
