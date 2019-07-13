import React from "react";
import CartTable from "../cart-table";
import TotalCart from "../total-cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import empty_cart from "../../img/empty_cart.png";
const CartPage = ({ quantity, total }) => {
  if (quantity === 0) {
    return (
      <div className="container">
        <div className="flex center rounded_wrapper empty_cart_wrapper">
          <img src={empty_cart} alt="empty_cart" className="dummy_img" />
          <div className="tac warning_empty_cart">
            <h2>Your cart is empty</h2>
            <Link to="/">
              <div className="btn btn_blue">Go shopping</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container cart_page_wrapper flex">
      <CartTable />
      <TotalCart total={total} />
    </div>
  );
};
const mapStateToProps = ({ shoppingCart: { allCartQuantity, cartTotal } }) => {
  return {
    quantity: allCartQuantity,
    total: cartTotal
  };
};
export default connect(mapStateToProps)(CartPage);
