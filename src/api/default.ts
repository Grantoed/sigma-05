import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const server = axios.create({
  baseURL: BASE_URL,
});
