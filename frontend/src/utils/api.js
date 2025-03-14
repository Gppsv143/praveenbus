const API_BASE_URL = "http://localhost:5000/api";

export const fetchBuses = async (from, to, date) => {
  try {
    const response = await fetch(`${API_BASE_URL}/buses?from=${from}&to=${to}&date=${date}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching buses:", error);
    return [];
  }
};
