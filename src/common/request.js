import axios from "axios";

let baseURL = "/api";
if (typeof window === "undefined") {
  baseURL = "https://jsonplaceholder.typicode.com";
} else {
  baseURL = "/api";
}
const instance = (req) =>{
  if (req) {
    return axios.create({
      headers: {
        cookie: req.get("cookie")||''
      },
      baseURL
    });
  }else{
    return axios.create({
      baseURL
    });

  }
}

export default instance;
