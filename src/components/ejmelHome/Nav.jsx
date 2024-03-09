import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "./Slider";
class Nav extends Component {
  state = {};
  render() {
    console.log();
    return (
      <div>
        <nav id="navigation">
          <div className="container">
            <div id="responsive-nav">
              <ul className="main-nav nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/laptop">Laptop</Link>
                </li>
                <li>
                  <Link to="/smartPhone">Smartphone</Link>
                </li>
                <li>
                  <Link to="#">Security</Link>
                </li>
                <li>
                  <Link to="#">Storage</Link>
                </li>
                <li>
                  <Link to="#">Console</Link>
                </li>
                <li>
                  <Link to="#">TV</Link>
                </li>
              </ul>
            </div>

         
        
          </div>
        </nav>
        {/* <Slider/> */}
      </div>
      
    );
  }
}

export default Nav;
