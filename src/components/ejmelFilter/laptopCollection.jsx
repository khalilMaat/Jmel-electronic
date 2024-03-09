import React, { Component, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../ejmelHome/Header";
import Nav from "../ejmelHome/Nav";
import { Slider } from "@material-ui/core";
// import Data from "../../laptopData";

function Laptop() {
  const [val, setVal] = useState([40, 100]);
  const updateVal = (e, item) => {
    setVal(item);
  };

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("September 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

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
                  <Link to="/laptop">Laptop</Link>
                </li>
                <li className="active">acer (227,490 Results)</li>
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
                      ACER
                      <small>(578)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-2" />
                    <label for="brand-2">
                      <span></span>
                      HP
                      <small>(125)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-3" />
                    <label for="brand-3">
                      <span></span>
                      LENOVO
                      <small>(755)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-4" />
                    <label for="brand-4">
                      <span></span>
                      APPLE
                      <small>(578)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-5" />
                    <label for="brand-5">
                      <span></span>
                      ASUS
                      <small>(125)</small>
                    </label>
                  </div>
                  <div className="input-checkbox">
                    <input type="checkbox" id="brand-6" />
                    <label for="brand-6">
                      <span></span>
                      DELL
                      <small>(755)</small>
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

              <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">Not Found Data</h4>
                <p>this collection can be present after :</p>
                <hr />
               
                  
                        <div className="hot-deal">
                          <ul className="hot-deal-countdown">
                            <li>
                              <div>
                                <h3>{timerDays}</h3>
                                <span>Days</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h3>{timerHours}</h3>
                                <span>Hours</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h3>{timerMinutes}</h3>
                                <span>Mins</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h3>{timerSeconds}</h3>
                                <span>Secs</span>
                              </div>
                            </li>
                          </ul>
                
                        </div>
                    
                
              </div>
              {/* <!-- /store top filter --> */}

              {/* <!-- store products --> */}
              {/* <div className="row">
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
                              {product.description}
                            </p>
                            <h3 className="product-name">
                              <a href="#">{product.name}</a>
                            </h3>
                            <h4 className="product-price">
                              {product.price}
                              <del className="product-old-price">$990.00</del>
                            </h4>
                            <div className="product-rating">
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
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn">
                              <i className="fa fa-shopping-cart"></i> add to
                              cart
                            </button>
                          </div>
                        </div>
                      </div>
            
                    </>
                  );
                })}
              
              </div> */}
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

export default Laptop;
