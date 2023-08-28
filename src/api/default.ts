import axios from "axios";

// const BASE_URL = "http://localhost:8080/api";
const BASE_URL = "https://sigma-hw-05.lm.r.appspot.com/api";

export const server = axios.create({
  baseURL: BASE_URL,
});
