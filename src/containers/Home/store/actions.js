import axios from "axios";
import { constants } from "./index";
import Axios from "../../../common/request";
// import myAxios from "../../../client/request";
// import sAxios from "../../../server/request";

const changeList = data => ({
  type: constants.GET_NEWS_LIST,
  data: data
});
/**
 *
 * @param {*} server 是不是server的运行环境
 */
export const getNewsLIst = () => {
  // saxios/caxios判断都不需要了，因为用了redux-thunk的withExtraArgument来传递axios
  // let request = null;
  // if (server) {
  //   request = sAxios;
  // } else {
  //   request = cAxios;
  // }
  // let request = server ? sAxios : cAxios;
  //     return axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
  return (dispatch, getState, Axios) => {
    return Axios.get("/posts")
      .then(result => {
        dispatch(changeList(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
