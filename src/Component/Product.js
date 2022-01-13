import React, { Component } from "react";
import Error from "./Error";
import ProductNotFound from "./ProductNotFound";
import Loader from "./Loader";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: false,
      productNotFound: false,
    };
  }

  setData = (products, checkproduct) => {
    this.setState({
      products: products,
      error: checkproduct,

      productNotFound: true,
    });
  };

  fetchDataProducts = async () => {
    try {
      const productsBuffData = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsBuffData.json();
      this.setData(productsData, true);
    } catch (err) {
      this.setData(undefined, false);
    }
  };

  componentDidMount() {
    this.fetchDataProducts();
  }

  render() {
    console.log(this.state.products);
    return (
      <div className="product-list">
        {this.state.error === false ? (
          <Loader />
        ) : (
          <div>
            {this.state.products === null ? (
              <ProductNotFound />
            ) : (
              <div className="cards">
                {this.state.products.map((elem) => (
                  <div className="productCards">
                    <img
                      className="image"
                      src={elem.image}
                      alt="product image"
                    />
                    <p className="product-title">{elem.title}</p>
                    <p className="price"> ₹{elem.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
