"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function OperatorSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/operator/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        router.push("/operator/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Signup error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Operator Signup</h2>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required className="border p-2" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" required className="border p-2" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="tel" placeholder="Phone" required className="border p-2" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input type="password" placeholder="Password" required className="border p-2" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
