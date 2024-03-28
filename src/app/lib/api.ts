import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: "https://maxapi.testexus.live",
});

api.interceptors.request.use((config) => {
  if (config.url === "/start") {
    return config;
  }

  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const auth = `Token ${token?.value}`;

  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers["Auth"] = auth;
  }

  return config;
});

export default api;
