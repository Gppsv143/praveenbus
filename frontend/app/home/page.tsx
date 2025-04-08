"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Bus {
  _id: string;
  busName: string;
  busType: string;
  totalSeats: number;
  price: number;
}

export default function Home() {
  const [buses, setBuses] = useState<Bus[]>([]);

  const fetchBuses = async () => {
    try {
      const res = await fetch(`${api}/user/get-buses`);
      const data = await res.json();
      if (res.ok) {
        setBuses(data.buses || []);
      } else {
        alert("Failed to fetch buses.");
      }
    } catch (error) {
      console.error("Error fetching buses:", error);
      alert("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Available Buses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <div
            key={bus._id}
            className="border border-gray-300 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold">{bus.busName}</h2>
            <p className="text-gray-600">Type: {bus.busType}</p>
            <p>Total Seats: {bus.totalSeats}</p>
            <p>Price: ₹{bus.price}</p>

            <a
              href={`/book?busId=${bus._id}`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

