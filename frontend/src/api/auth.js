// src/api/auth.js

export const login = async (username, password) => {
  try {
    const response = await fetch('/api/operator/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Invalid login credentials');
    }

    return await response.json(); // assuming response contains a JSON object
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const logout = async () => {
  try {
    const response = await fetch('/api/operator/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    return await response.json(); // assuming response contains a success message
  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};
