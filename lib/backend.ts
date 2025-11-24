import axios from "axios";

export const backend = axios.create({
  baseURL: "https://ergastiri.oncloud.gr",
  headers: {
    "Content-Type": "application/json",
  },
});
