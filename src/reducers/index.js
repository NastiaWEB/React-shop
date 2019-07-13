import { updateCart } from "./update-cart";
import { uploadProductList } from "./upload-product-list";
const reducer = (state, action) => {
  return {
    dataList: uploadProductList(state, action),
    shoppingCart: updateCart(state, action)
  };
};
export default reducer;
