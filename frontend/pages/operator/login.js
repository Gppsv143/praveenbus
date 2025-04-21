// frontend/pages/operator/login.js
import React, { useState } from 'react';

const OperatorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/operator/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Bad credentials');
      }

      // Handle successful login
    } catch (error) {
      setErrorMessage('Bad credentials');
    }
  };

  return (
    <div>
      <h1>Operator Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default OperatorLogin;
