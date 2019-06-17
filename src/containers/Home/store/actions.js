import axios from "axios";
import { constants } from "./index";

const changeList = data => ({
  type: constants.GET_NEWS_LIST,
  data: data
});
export const getNewsLIst = () => {
  return dispatch => {
    //     return axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
    return axios
      .get("/api/posts")
      .then(result => {
        dispatch(changeList(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
