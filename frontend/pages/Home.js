import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import BusList from "../components/BusList";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState([]);

  const searchBuses = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/buses?from=${from}&to=${to}&date=${date}`);
      setBuses(response.data);
    } catch (error) {
      console.error("Error fetching buses:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <input className="border p-2" type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
        <input className="border p-2 ml-2" type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
        <input className="border p-2 ml-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={searchBuses}>Search</button>
      </div>
      <BusList buses={buses} />
    </div>
  );
}
