// pages/operator-signup.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function OperatorSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://52.204.14.231:5000/api/auth/operator/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/verify-otp");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Operator Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
