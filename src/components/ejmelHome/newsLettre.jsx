import React, { Component } from "react";

class Lettre extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="newsletter" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter">
                  <p>
                    Sign Up for the <strong>NEWSLETTER</strong>
                  </p>
                  <form>
                    <input
                      className="input"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button className="newsletter-btn">
                      <i className="fa fa-envelope"></i> Subscribe
                    </button>
                  </form>
                  <ul className="newsletter-follow">
                    <li>
                      <a href="#">
                      <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lettre;
