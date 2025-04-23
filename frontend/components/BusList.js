// components/BusList.js
import Link from 'next/link';

const BusList = ({ buses }) => {
  return (
    <div>
      <h2>Bus List</h2>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            <Link href={`/bus/${bus.id}`}>
              <a>{bus.name}</a> {/* Correct usage of <Link> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusList;

