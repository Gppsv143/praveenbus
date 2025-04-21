const API_BASE_URL = "http://52.204.14.231:5000/api";

export const signupUser = async (userData: any) => {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) throw new Error("Signup failed");
  return await res.json();
};

export const loginUser = async (credentials: any) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");
  return await res.json();
};
