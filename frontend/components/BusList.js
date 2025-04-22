import BusCard from "./BusCard";

const BusList = ({ buses }) => {
  return (
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard key={bus.id} bus={bus} />
      ))}
    </div>
  );
};

export default BusList;
