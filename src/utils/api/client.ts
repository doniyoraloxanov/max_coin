import axios from "axios";
import { getCookie } from "cookies-next";

const client = axios.create({
  baseURL: "https://mobapi.testexus.live",
});

client.interceptors.request.use((config) => {
  if (config.url === "/start") {
    return config;
  }

  const token = getCookie("token");

  config.headers["Content-Type"] = "application/json";
  config.headers["Auth"] = `Token ${token}`;

  return config;
});

export default client;
