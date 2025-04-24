export const isOperatorLoggedIn = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("operatorToken");
    return !!token;
  }
  return false;
};
