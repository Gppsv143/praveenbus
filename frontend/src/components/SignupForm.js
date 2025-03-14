import { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", { name, phone, password });
      alert(response.data.message);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="p-4">
      <input className="border p-2 w-full" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 w-full mt-2" type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input className="border p-2 w-full mt-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2 w-full mt-2" onClick={handleSignup}>Signup</button>
    </div>
  );
}
