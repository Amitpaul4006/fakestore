import React, { Component } from 'react';
import Products from './Component/Product';
import Navigation from './Component/Navigation';
import Midsection from './Component/Midsection';
import Footer from './Component/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Midsection /> 
        <Products /> 
        <Footer /> 

      </div>
    )
  }
}
