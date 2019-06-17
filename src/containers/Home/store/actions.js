import axios from "axios";
import { constants } from "./index";

const changeList = data => ({
  type: constants.GET_NEWS_LIST,
  data: data
});
/**
 *
 * @param {*} server 是不是server的运行环境
 */
export const getNewsLIst = server => {
  let url = "";
  if (server) {
    url = "https://jsonplaceholder.typicode.com/posts";
  }else{
    url = "/api/posts";
  }
  return dispatch => {
    //     return axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
    return axios
      .get(url)
      .then(result => {
        dispatch(changeList(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
