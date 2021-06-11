import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateVAlue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateVAlue();
  return (
    <nav className="header">
      {/* Logo on the left -> img */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links   */}
      <div className="header_nav">
        {/* first link */}
        <Link className="header_link" to="/login">
          <div className="header_option">
            <span className="header_optionLine1">Hello chaimae</span>
            <span className="header_optionLine2">Sign In</span>
          </div>
        </Link>
        {/* second link */}
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLine1">Returns</span>
            <span className="header_optionLine2"> & Orders</span>
          </div>
        </Link>
        {/* third link */}
        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_optionLine1">Your</span>
            <span className="header_optionLine2">Prime</span>
          </div>
        </Link>
        {/* Basket icon with number */}
        <Link to="/checkout" className="header_link">
          <div className="headerBasket">
            {/* basket icon */}
            <ShoppingBasketIcon className="header_optionLine1" />
            {/* number of items in the basket */}
            <span className="header_optionLine2 basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
