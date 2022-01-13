import React, { Component } from "react";
import Logo from "./ImgFolder/shoplogo-removebg-preview.png";
import Search from './ImgFolder/search-removebg-preview.png';
import People from './ImgFolder/people-11-removebg-preview.png';
import Cart from "./ImgFolder/cart-19-removebg-preview.png";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="product image" />
        </div>

        <div className="nav-link">
          <nav>
            <Link className="link" to="">
              HOPE
            </Link>
            <Link className="link" to="">
              SHOP
            </Link>
            <Link className="link" to="">
              PRODUCTS
            </Link>
            <Link className="link" to="">
              BLOG
            </Link>
            <Link className="link" to="">
              PAGES
            </Link>
          </nav>
        </div>

        <div className="Icons">
          <img className="logo2" src={Search} alt="search-icon" />
          <img className="logo2" src={People} alt="people-icon" />
          <img className="logo2" src={Cart} alt="cart-icon" />
        </div>
      </div>
    );
  }
}
