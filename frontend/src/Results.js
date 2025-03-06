import React from 'react';

function Results({ buses }) {
  return (
    <div>
      {buses.map((bus) => (
        <div key={bus.id}>
          <p>{bus.bus_name}</p>
          <p>{bus.departure_time}</p>
        </div>
      ))}
    </div>
  );
}

export default Results;
