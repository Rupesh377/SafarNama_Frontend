import axios from "axios";

const api = axios.create({
  baseURL: "https://safarnama-backend-1-2ydf.onrender.com",  // uses vite proxy
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
