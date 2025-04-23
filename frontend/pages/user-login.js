export default function UserLogin() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>User Login</h1>
      <form>
        <input type="text" placeholder="Email or Phone" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

