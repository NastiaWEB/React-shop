import React from "react";
import { connect } from "react-redux";
import {
  onAddedToCart,
  onDeleteCartProduct,
  onDecreaseCartProduct
} from "../../actions";
import { Link } from "react-router-dom";

const CartTable = props => {
  const { items, quantity, onDelete, onIncrease, onDecrease } = props;
  const CartProduct = props => {
    const { id, title, count, price } = props;
    return (
      <div className="ct_product_wrap  flex" key={id}>
        <div className="ct_product flex col_2">
          <Link
            to="/product"
            className="product_images_wrapper ct_product_image"
          >
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
              className="product_image"
              alt="product"
            />
          </Link>
          <Link to="/product" className="strong ct_product_name">
            {title}
          </Link>
        </div>
        <div className="tac flex center col_1">
          <div
            className="btn rounded_btn ct_action"
            onClick={() => onDecrease(id)}
          >
            <img
              className="icon"
              src="https://img.icons8.com/material-rounded/24/000000/minus-math.png"
              alt="icon"
            />
          </div>
          <span>{count}</span>
          <div
            className="btn rounded_btn ct_action"
            onClick={() => onIncrease(id)}
          >
            <img
              className="icon"
              src="https://img.icons8.com/material-rounded/24/000000/plus-math.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="tac col_1">
          <p className="price_wrap strong">
            <span className="currency">$</span>
            <span className="price">{price}</span>
          </p>
        </div>
        <div className="ct_actions_wrapper">
          <span className="delete flex ct_action" onClick={() => onDelete(id)}>
            <span className="icon_wrap ">
              <img
                className="icon"
                src="https://img.icons8.com/material-rounded/24/000000/trash.png"
                alt="icon"
              />
            </span>
            Delete
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className="cart_table rounded_wrapper col_2">
      <div className="table_header flex">
        <h3 className="col_2"> {quantity} Products</h3>
        <div className="tac col_1">Quantity</div>
        <div className="tac col_1">Price</div>
      </div>
      <div className="table_body">{items.map(CartProduct)}</div>
    </div>
  );
};
const mapStateToProps = ({ shoppingCart: { cartItems, allCartQuantity } }) => {
  return {
    items: cartItems,
    quantity: allCartQuantity
  };
};
const mapDispathToProps = dispatch => {
  return {
    onIncrease: id => dispatch(onAddedToCart(id)),
    onDecrease: id => dispatch(onDecreaseCartProduct(id)),
    onDelete: id => dispatch(onDeleteCartProduct(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(CartTable);
