import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-500 text-white">
      <img src="/images/praveenbus-logo.PNG" alt="PraveenBus Logo" className="w-12 h-12" />
      <nav>
        <Link href="/">
          <a className="px-4">Home</a>
        </Link>
        <Link href="/add-bus">
          <a className="px-4">Add Bus</a>
        </Link>
        <Link href="/dashboard">
          <a className="px-4">Dashboard</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

