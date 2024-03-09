import React, { Component } from "react";
import '../Ejmel.css';
import Header from "./Header";
import Nav from "./Nav";
import Shop from "./Shop";
import Product from "./Product";
import Deal from "./hotDeal";
import Lettre from "./newsLettre";
import Footer from "./Footer";
import Slider from "./Slider";
import TitleProduct from "./productTitle";
class Ejmel extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Slider/>
        <Shop />
        <TitleProduct/>
        <Product />
        <Deal />
        <Lettre />
        <Footer/>
      </div>
    );
  }
}

export default Ejmel;
