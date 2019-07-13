import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as HeartIcon } from "../../img/heart.svg";
import { connect } from "react-redux";

const Header = ({ quantity }) => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav flex wrap center">
          <div className="logo_wrap flex center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="menus flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
          <div className="flex">
            <Link className="menu_icon_item uppercase flex" to="/">
              <span className="icon_wrap ">
                <img
                  className="icon"
                  alt="ico"
                  src="https://img.icons8.com/material-rounded/24/000000/user.png"
                />
              </span>
              My profile
            </Link>
            <Link className="cart_icon uppercase flex" to="/cart">
              <span className="icon_wrap ">
                <img
                  className="icon"
                  alt="ico"
                  src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"
                />
              </span>
              cart
              <span id="cart_counter" className="tac">
                {quantity}
              </span>
            </Link>
            <Link className="heart_icon uppercase flex" to="/">
              <span className="icon_wrap ">
                <HeartIcon className="icon" />
              </span>
              favorites
            </Link>
          </div>
        </nav>
      </div>
      <div className="nav_panel">
        <div className="container flex wrap">
          <ul className="flex">
            <li className="nav_item">
              <Link to="#">Top Sales</Link>
            </li>
            <li className="nav_item">
              <Link to="#">Brand Focus</Link>
            </li>
            <li className="nav_item">
              <Link to="#">Hi-tech</Link>
            </li>
          </ul>
          <div className="search_bar flex">
            <label htmlFor="search" className="icon_wrap">
              <img
                className="icon"
                alt="ico"
                src="https://img.icons8.com/material-rounded/30/000000/search.png"
              />
            </label>
            <input
              id="search"
              type="text"
              name="search"
              placeholder="I’m looking for ..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ shoppingCart: { allCartQuantity } }) => {
  return {
    quantity: allCartQuantity
  };
};
export default connect(mapStateToProps)(Header);
