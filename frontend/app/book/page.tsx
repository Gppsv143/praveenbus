"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/api";

interface Bus {
  _id: string;
  busName: string;
  busType: string;
  totalSeats: number;
  price: number;
}

export default function BookPage() {
  const [bus, setBus] = useState<Bus | null>(null);
  const searchParams = useSearchParams();
  const busId = searchParams.get("busId");

  const fetchBus = async () => {
    if (!busId) return;
    try {
      const res = await fetch(`${api}/user/get-bus/${busId}`);
      const data = await res.json();
      if (res.ok) {
        setBus(data.bus);
      } else {
        alert("Failed to fetch bus details.");
      }
    } catch (error) {
      console.error("Error fetching bus:", error);
      alert("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchBus();
  }, [busId]);

  if (!bus) return <p className="p-8">Loading bus info...</p>;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Book Your Seat</h1>
      <div className="border p-6 rounded shadow">
        <h2 className="text-xl font-semibold">{bus.busName}</h2>
        <p>Type: {bus.busType}</p>
        <p>Total Seats: {bus.totalSeats}</p>
        <p>Price: ₹{bus.price}</p>
        {/* Future: Add seat selection and booking button here */}
      </div>
    </div>
  );
}

