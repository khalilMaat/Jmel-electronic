import React, { Component } from "react";
import { Link } from "react-router-dom";
class Shop extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* Shop section */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop01.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Laptop
                      <br />
                      Collection
                    </h3>
                    <Link to="/laptop" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      SmartPhone
                      <br />
                      Collection
                    </h3>
                    <Link to="smartPhone" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Security
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Storage
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Console
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop01.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      TV
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Shop section */}
      </div>
    );
  }
}

export default Shop;
