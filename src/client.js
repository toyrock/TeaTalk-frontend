import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

client.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) request.headers.Authorization = token;
  return request;
});
