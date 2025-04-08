"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("praveenbusUser");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser).name || "User");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to PraveenBus, {user} 🎉</h1>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        onClick={() => {
          localStorage.removeItem("praveenbusUser");
          router.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

