import axios from "axios";

let baseURL = "/api";
const instance = axios.create({
  baseURL
});

export default instance;
