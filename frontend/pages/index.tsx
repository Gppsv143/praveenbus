import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PraveenBus - Home</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Welcome to PraveenBus</h1>
        <Link href="/dashboard">
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}
