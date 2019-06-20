export const getHeaderInfo = () => {
  return (dispatch, getState, Axios) => {
    return Axios.get("/posts")
      .then(result => {
        dispatch(changeList(result.data));
      })
      .catch(err => {
        // console.log(err);
      });
  };
};
