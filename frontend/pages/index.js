import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-center">
      {/* Header with Logo */}
      <header className="bg-praveenGreen p-4 shadow">
        <div className="flex justify-center items-center space-x-4">
          <Image src="/praveenbus-logo.png" alt="PraveenBus Logo" width={120} height={60} />
          <h1 className="text-white text-3xl font-bold">PraveenBus</h1>
        </div>
      </header>

      {/* Welcome Section */}
      <main className="p-8">
        <h2 className="text-2xl text-praveenRed font-semibold mb-4">Flight on Road</h2>
        <p className="text-lg text-gray-700">Book your bus ticket with comfort and confidence.</p>
      </main>
    </div>
  );
}

