"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function OperatorLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/operator/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("operatorToken", data.token);
        alert("Login successful!");
        router.push("/operator/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Operator Login</h2>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <input type="tel" placeholder="Phone" required className="border p-2" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input type="password" placeholder="Password" required className="border p-2" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit" className="bg-red-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
