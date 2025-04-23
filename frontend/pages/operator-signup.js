import { useState } from "react";
import { useRouter } from "next/router";

export default function OperatorSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", formData.mobile, formData.email);
    router.push("/verify-otp");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Operator Signup</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
        <input name="age" placeholder="Age" onChange={handleChange} required /><br /><br />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select><br /><br />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required /><br /><br />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
}
