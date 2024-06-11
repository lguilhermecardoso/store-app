import axios from "axios";

export const api = axios.create({
  baseURL: "https://product-mock-api-three.vercel.app",
});