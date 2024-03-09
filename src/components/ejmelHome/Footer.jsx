import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">About Us</h3>
                    <p>Hi i am khalil maatoug sidkom hhhhhh</p>
                    <ul className="footer-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker"></i>05 Cairo Road
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-phone"></i>+216 58 842 815
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope-o"></i>
                          maatoug610@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Categories</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">Laptop</a>
                      </li>
                      <li>
                        <a href="#">Smartphones</a>
                      </li>
                      <li>
                        <a href="#">Security</a>
                      </li>
                      <li>
                        <a href="#">Storage</a>
                      </li>
                      <li>
                        <a href="#">Console</a>
                      </li>
                      <li>
                        <a href="#">TV</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="clearfix visible-xs"></div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Information</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                      <li>
                        <a href="#">My Account</a>
                      </li>

                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
