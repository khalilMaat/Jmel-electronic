import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Header extends Component {
  state = {};
  render() {
    let menuBar = document.getElementsByClassName("menu-toggle");

    function openBar() {
      console.log("cliked");
      // menuBar.classList.add("active");
    }

    return (
      <div>
        {/* HEADER  */}
        <header>
          {/* TOP HEADER */}
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li>
                  <a href="#">
                    <i className="fa fa-phone"></i> +216 58 842 815
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o"></i> maatoug610@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker"></i> 5 Cario Road
                  </a>
                </li>
              </ul>
              <ul className="header-links pull-right">
                <li>
                  <a href="#">
                    <i className="fa fa-dollar"></i> TND
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-o"></i> My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /TOP HEADER */}

          {/* MAIN HEADER */}
          <div id="header">
            <div className="container">
              <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                  <div className="header-logo">
                    <Link to="/" className="logo">
                      <img src="./img/ejmel.png" alt="" />
                    </Link>
                  </div>
                </div>
                {/* /LOGO */}

                {/* SEACH BAR */}
                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                        <option value="1">Category 03</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <button className="search-btn">Search</button>
                    </form>
                  </div>
                </div>
                {/* /SEACH BAR */}

                {/* MENU TOOGLE */}
                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    <div className="menu-toggle">
                      <button onClick={openBar}>
                        <a href="#">
                          <i className="fa fa-bars"></i>
                          <span>Menu</span>
                        </a>
                      </button>
                    </div>
                    {/* /MENU TOOGLE */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /MAIN HEADER */}
        </header>
        {/* /HEADER */}
      </div>
    );
  }
}

export default Header;
