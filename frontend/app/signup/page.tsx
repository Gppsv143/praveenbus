"use client";
import { useState } from "react";
import { signupUser } from "@/lib/api";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      setMessage("Signup successful!");
    } catch (error: any) {
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold">Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Sign Up</button>
        {message && <p className="text-red-500">{message}</p>}
      </form>
    </div>
  );
}

