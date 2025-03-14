import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", { phone, password });
      alert(response.data.message);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="p-4">
      <input className="border p-2 w-full" type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input className="border p-2 w-full mt-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 w-full mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
}
