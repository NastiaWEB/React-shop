const productsLoaded = newProducts => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: newProducts
  };
};
const productsRequested = () => {
  return { type: "FETCH_PRODUCTS_REQUEST" };
};
const productsError = error => {
  return { type: "FETCH_PRODUCTS_FAILUER", payload: error };
};
const onAddedToCart = id => {
  return { type: "PRODUCT_ADDED_TO_CART", payload: id };
};
const onDeleteCartProduct = id => {
  return { type: "DELETE_CART_PROSUCT", payload: id };
};
const onDecreaseCartProduct = id => {
  return { type: "DECREASE_CART_PRODUCT", payload: id };
};
const fetchProducts = (dispatch, bookstoreService) => () => {
  dispatch(productsRequested());
  bookstoreService
    .getBooks()
    .then(items => dispatch(productsLoaded(items)))
    .catch(err => dispatch(productsError(err)));
};
export {
  fetchProducts,
  onAddedToCart,
  onDeleteCartProduct,
  onDecreaseCartProduct
};
