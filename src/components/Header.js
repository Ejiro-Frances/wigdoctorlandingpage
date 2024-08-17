import React from "react";
import Logo from "../assets/images/logo.jpg";
import { IoSearch } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";

import "./App.css";

const Header = () => {
  return (
    <div className="navBar">
      <div className="img-container">
        <img src={Logo} alt="logo" className="TWD" />
      </div>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Contact Us</li>
        <li>
          <IoSearch />
          <span>Search</span>
        </li>
        <li>
          <HiMiniShoppingCart />
          <span>My Wishlist</span>
        </li>
        <li>
          <BsPerson /> <span>My Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
