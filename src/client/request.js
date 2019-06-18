import axios from "axios";

let baseURL = "/api";
if (typeof window === "undefined") {
  baseURL = "https://jsonplaceholder.typicode.com";
} else {
  baseURL = "/api";
}
const instance = axios.create({
  baseURL
});

export default instance;
