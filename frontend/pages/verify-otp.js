import { useRouter } from "next/router";
import { useState } from "react";

export default function VerifyOTP() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP Verified! Redirecting...");
      router.push("/dashboard/user"); // or operator, depending
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Verify OTP</h1>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
