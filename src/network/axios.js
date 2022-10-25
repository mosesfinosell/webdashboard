import axios from "axios";

export const baseRequest = axios.create({
  baseURL: "https://dev.finosell.link/api/v2",
});

baseRequest.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;

    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
