const updateAllQuantity = updatedCartProduct => {
  const totalCount = (obj, prop) => {
    return obj.reduce((total, obj) => {
      return total + obj[prop];
    }, 0);
  };
  return {
    cartTotal: totalCount(updatedCartProduct, "price"),
    allCartQuantity: totalCount(updatedCartProduct, "count"),
    cartItems: updatedCartProduct
  };
};
const updateCartItem = (product, item = {}, quantity) => {
  const { id = product.id, title = product.title, count = 0, price = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    price: price + quantity * product.price
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateOrder = (state, productId, quantity) => {
  const {
    shoppingCart: { cartItems },
    dataList: { data }
  } = state;

  const dataProduct = data.find(({ id }) => id === productId);
  const cartProductIdx = cartItems.findIndex(({ id }) => id === productId);
  const cartProduct = cartItems[cartProductIdx];
  const updatedProduct = updateCartItems(
    cartItems,
    updateCartItem(dataProduct, cartProduct, quantity),
    cartProductIdx
  );

  return updateAllQuantity(updatedProduct);
};

const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      cartTotal: 0,
      allCartQuantity: 0
    };
  }
  switch (action.type) {
    case "DELETE_CART_PROSUCT":
      const cartItem = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -cartItem.count);
    case "DECREASE_CART_PRODUCT":
      return updateOrder(state, action.payload, -1);
    case "PRODUCT_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    default:
      return state.shoppingCart;
  }
};
export { updateCart };
