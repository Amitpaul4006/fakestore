import React, { Component } from "react";
import Logo from "./ImgFolder/signature-removebg-preview.png";
import Brand from "./ImgFolder/brand.png";

export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="iconBrand" src={Brand} alt="footer-image" />

        {/* <img className="sig" src = {Logo} alt='footer-image'/> */}
        <div className="list">
          <p className="brandName">BRANDNAME</p>
          <p className="clothing">CLOTHING</p>
          <p className="masore">MASORE</p>
        </div>
      </div>
    );
  }
}
