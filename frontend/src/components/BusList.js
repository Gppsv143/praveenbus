export default function BusList({ buses }) {
  return (
    <div className="p-4">
      {buses.length > 0 ? (
        buses.map((bus) => (
          <div key={bus.id} className="border p-2 mb-2">
            <h2 className="text-lg font-bold">{bus.name}</h2>
            <p>{bus.from} → {bus.to}</p>
            <p>{bus.price} INR</p>
          </div>
        ))
      ) : (
        <p>No buses available.</p>
      )}
    </div>
  );
}
