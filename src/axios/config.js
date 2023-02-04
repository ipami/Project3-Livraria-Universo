import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://pj3-estao-servidos.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
