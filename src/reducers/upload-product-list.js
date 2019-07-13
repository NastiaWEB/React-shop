const uploadProductList = (state, action) => {
  if (state === undefined) {
    return {
      data: [],
      loading: true,
      error: false
    };
  }
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        data: [],
        loading: true,
        error: null
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: false
      };
    case "FETCH_PRODUCTS_FAILUER":
      return {
        data: [],
        loading: false,
        error: true
      };
    default:
      return state.dataList;
  }
};
export { uploadProductList };
