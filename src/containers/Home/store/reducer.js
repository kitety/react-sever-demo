import { constants } from "./index";

const homeInitialState = {
  newsList: [],
  name: "Tom"
};
export default (state = homeInitialState, action) => {
  switch (action.type) {
    case constants.GET_NEWS_LIST:
      return {
        ...state,
        newsList: action.data
      };
    default:
      return state;
  }
};
