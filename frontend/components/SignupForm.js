import React from "react";

const SignupForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
