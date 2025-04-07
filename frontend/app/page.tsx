export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">PraveenBus</h1>
      <p className="text-lg text-center mb-6">Flight on Road 🚍✈️</p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Signup
        </a>
      </div>
    </div>
  );
}

