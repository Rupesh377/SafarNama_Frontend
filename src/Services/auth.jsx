import api from "./api";

export const login = async (email, password) => {
  const res = await api.post("/api/login", { email, password });
  localStorage.setItem("token", res.data.jwt);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => !!localStorage.getItem("token");
