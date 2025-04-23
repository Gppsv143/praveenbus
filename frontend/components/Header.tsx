import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">PraveenBus</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/add-bus">Add Bus</Link>
        <Link href="/add-seat">Add Seat</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
