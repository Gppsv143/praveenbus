"use client";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function OperatorDashboard() {
  const router = useRouter();
  const [bus, setBus] = useState({
    busName: "",
    busType: "",
    totalSeats: "",
    price: "",
  });

  const handleChange = (e: any) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleAddBus = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("operatorToken");

    if (!token) {
      alert("Please login first");
      router.push("/operator/login");
      return;
    }

    try {
      const response = await fetch(`${api}/operator/add-bus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bus),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Bus added successfully!");
        setBus({ busName: "", busType: "", totalSeats: "", price: "" });
      } else {
        alert(data.message || "Failed to add bus.");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding bus.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-6">Add a New Bus</h2>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleAddBus}>
        <input type="text" name="busName" placeholder="Bus Name" required className="border p-2" value={bus.busName} onChange={handleChange} />
        <input type="text" name="busType" placeholder="Bus Type" required className="border p-2" value={bus.busType} onChange={handleChange} />
        <input type="number" name="totalSeats" placeholder="Total Seats" required className="border p-2" value={bus.totalSeats} onChange={handleChange} />
        <input type="number" name="price" placeholder="Ticket Price" required className="border p-2" value={bus.price} onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Add Bus</button>
      </form>
    </div>
  );
}
