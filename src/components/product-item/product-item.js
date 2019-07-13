import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAddedToCart }) => {
  const { title, price, coverImage } = product;
  return (
    <div className="product_item rounded_wrapper flex_column">
      <Link to="/product" className="product_images_wrapper">
        <img src={coverImage} className="product_image" alt="product" />
      </Link>
      <div className="desc">
        <Link to="/product" className="title">
          {title}
        </Link>
        <p className="price_wrap">
          <span className="currency">$</span>
          <span className="price">{price}</span>
        </p>
        <button className="btn btn_blue" onClick={onAddedToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
