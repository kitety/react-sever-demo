import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers:{
    cookie:req.get('cookie')
  }
});

export default instance;
