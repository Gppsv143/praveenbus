"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <Image
        src="/praveenbus-logo.png"
        alt="PraveenBus Logo"
        width={200}
        height={100}
        priority
      />
      <h1 className="text-3xl font-bold">Welcome to PraveenBus</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

