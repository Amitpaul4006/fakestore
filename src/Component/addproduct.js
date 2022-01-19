import React, { Component } from "react";

export default class NewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: []
    };
    
  }

  componentDidMount = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        title: "test product",
        price: "13.5",
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
            obj: data
        })
      });
  };

  render() {
    const { obj } = this.state;
    console.log(obj);
    return (
        <div className="productCards">
        <img
          className="image"
          src={obj.image}
          alt="product image"
        />
        <p className="product-title">{obj.title}</p>
        <p className="price"> ₹{obj.price}</p>
      </div>
    );
  }
}