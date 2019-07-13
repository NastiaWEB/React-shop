import React from "react";

const TotalCart = ({ total }) => {
  return (
    <div className="sidebar rounded_wrapper ct_sidebar">
      <div className="table_header">
        <h3>Order amount</h3>
      </div>
      <div className="order_details">
        <div className="flex order_desc">
          <p>Price:</p>
          <span>20$</span>
        </div>
        <div className="flex order_desc">
          <p>Discount:</p>
          <span>20%</span>
        </div>
        <div className="flex order_desc">
          <p>Total:</p>
          <p className="price_wrap strong">
            <span className="currency">$</span>
            <span className="price">{total}</span>
          </p>
        </div>
        <div className="order_desc">
          <div className="btn btn_blue ">checkout</div>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
