import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../ejmelHome/Header";
import Nav from "../ejmelHome/Nav";
import { Slider } from "@material-ui/core";
import Data from "../../phoneData";

function Phone() {
  const [val, setVal] = useState([40, 100]);

  const updateVal = (e, item) => {
    setVal(item);
  };

  return (
    <>
      <Header />
      <Nav />
      {/* <!-- BREADCRUMB --> */}
      <div id="breadcrumb" className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#">All Categories</a>
                </li>
                <li>
                  <Link to="/smartPhone">smartPhone</Link>
                </li>
                <li className="active">Evertek (227,490 Results)</li>
              </ul>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /BREADCRUMB --> */}
      {/* <!-- SECTION --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- ASIDE --> */}
            <div id="aside" className="col-md-3">
              {/* <!-- aside Widget --> */}

              {/* <!-- /aside Widget -->
  
                      <!-- aside Widget --> */}
              <div className="aside">
                <h3 className="aside-title">Price</h3>
                <div className="price-filter">
                  <div id="price-slider">
                    <Slider
                      color="secondary"
                      value={val}
                      max={200}
                      onChange={updateVal}
                    />
                  </div>
                  <div className="input-number price-min">
                    Min
                    <input
                      id="price-min"
                      type="number"
                      value={val[0]}
                      onChange={updateVal}
                      disabled
                      readonly
                    />
                    {/* <span className="qty-up">+</span>
                      <span className="qty-down">-</span> */}
                  </div>
                  <span>-</span>
                  <div className="input-number price-max">
                    Max
                    <input
                      id="price-max"
                      type="number"
                      value={val[1]}
                      onChange={updateVal}
                      disabled
                      readonly
                    />
                    {/* <span className="qty-up">+</span>
                      <span className="qty-down">-</span> */}
                  </div>
                </div>
              </div>
              {/* <!-- /aside Widget -->
  
                      <!-- aside Widget --> */}
              <div className="aside">
                <h3 className="aside-title">Brand</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-1" />
                    <label for="brand-1">
                      <span></span>
                      Evertek
                      <small>(578)</small>
                    </label>
                  </div>

                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      Tecno
                      <small>(125)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      Nokia
                      <small>(755)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-4" />
                    <label for="brand-4">
                      <span></span>
                      LP
                      <small>(578)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-5" />
                    <label for="brand-5">
                      <span></span>
                      OALE
                      <small>(125)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-6" />
                    <label for="brand-6">
                      <span></span>
                      HONOR
                      <small>(755)</small>
                    </label>
                  </div>
                </div>
                <br />
                {/* RAM */}
                <h3 className="aside-title">RAM</h3>
                <div className="checkbox-filter">
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-1" />
                    <label for="ram-1">
                      <span></span>
                      1GO
                      <small>(55)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-2" />
                    <label for="ram-2">
                      <span></span>
                      2GO
                      <small>(766)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-3" />
                    <label for="ram-3">
                      <span></span>
                      3GO
                      <small>(789)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-4" />
                    <label for="ram-4">
                      <span></span>
                      4GO
                      <small>(89)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-5" />
                    <label for="ram-5">
                      <span></span>
                      6GO
                      <small>(22)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-6" />
                    <label for="ram-6">
                      <span></span>
                      8GO
                      <small>(234)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-6" />
                    <label for="ram-6">
                      <span></span>
                      12GO
                      <small>(2)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-6" />
                    <label for="ram-6">
                      <span></span>
                      16GO
                      <small>(234)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="ram-6" />
                    <label for="ram-6">
                      <span></span>
                      32GO
                      <small>(43)</small>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- /aside Widget -->
  
                      <!-- aside Widget --> */}

              {/* <!-- /aside Widget --> */}
            </div>
            {/* <!-- /ASIDE --> */}

            {/* <!-- STORE --> */}
            <div id="store" className="col-md-9">
              {/* <!-- store top filter --> */}
              <div className="store-filter clearfix">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select className="input-select">
                      <option value="0">Prix croissant</option>
                      <option value="1">Prix decroissant</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select className="input-select">
                      <option value="0">20</option>
                      <option value="1">50</option>
                    </select>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active">
                    <i className="fa fa-th"></i>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-th-list"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /store top filter --> */}

              {/* <!-- store products --> */}
              <div className="row">
                {Data.map((product) => {
                  return (
                    <>
                      <div className="col-md-4 col-xs-6">
                        <div className="product">
                          <div className="product-img">
                            <img src={product.image} alt="" />
                          </div>

                          <div className="product-body">
                            <p className="product-category">
                              {product.descreption
                                .split(" ")
                                .slice(0, 12)
                                .join(" ")}
                            </p>
                            <h3 className="product-name">
                              <a href="#">
                                {product.name
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ")}
                              </a>
                            </h3>
                            <h4 className="product-price">
                              {product.price}
                              <del className="product-old-price">$990.00</del>
                            </h4>
                            {/* <div className="product-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                              <div className="product-btns">
                                <button className="add-to-wishlist">
                                  <i className="fa fa-heart-o"></i>
                                  <span className="tooltipp">
                                    add to wishlist
                                  </span>
                                </button>
                                <button className="add-to-compare">
                                  <i className="fa fa-exchange"></i>
                                  <span className="tooltipp">add to compare</span>
                                </button>
                                <button className="quick-view">
                                  <i className="fa fa-eye"></i>
                                  <span className="tooltipp">quick view</span>
                                </button>
                              </div> */}
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn">
                              <i className="fa fa-eye"></i>A3mel tala
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- product --> */}
                    </>
                  );
                })}
                {/* <!-- product --> */}
              </div>
              {/* <!-- /store products -->
  
                      <!-- store bottom filter --> */}
              <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
                  <li className="active">1</li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /store bottom filter --> */}
            </div>
            {/* <!-- /STORE --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /SECTION --> */}
    </>
  );
}

export default Phone;
