import React from "react";
const MainProduct = ({ onAddedToCart }) => {
  return (
    <div className="container flex wrap product_main_wrapper">
      <div className="col_1">
        <div className="product_images_wrapper flex center rounded_wrapper">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
            className="main_product_image"
            alt="product"
          />
        </div>
      </div>
      <div className="rounded_wrapper product_desc_sdb">
        <p className="main_product_title strong">Zenden Active</p>
        <div className="main_produc_buttons flex">
          <div onClick={onAddedToCart} className="btn btn_blue pay_btn">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProduct;
