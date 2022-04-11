import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    // configuration object
    baseURL: "https://finosell.link/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("password")}`
    }
  });
};