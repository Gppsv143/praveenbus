import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow bg-white">
      <div className="flex items-center">
        <Image src="/praveenbus-logo.png" alt="PraveenBus Logo" width={150} height={50} />
        <h1 className="ml-4 text-2xl font-bold text-green-700">PraveenBus</h1>
      </div>
    </header>
  );
}

