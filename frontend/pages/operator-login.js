import { useRouter } from "next/router";
import { useState } from "react";

export default function OperatorLogin() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", mobile);
    router.push("/dashboard/operator"); // example
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Operator Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

