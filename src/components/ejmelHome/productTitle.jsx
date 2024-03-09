import React, { Component } from 'react'

class TitleProduct extends Component {
    state = {};
    render() { 
        return (
          <>
  
                <div className="section-title">
                  <h3 className="title">New Products</h3>
                  <div className="section-nav">
                    <ul className="section-tab-nav tab-nav">
                      <li className="active">
                        <a data-toggle="tab" href="#tab1">
                          Laptops
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          Smartphones
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          Security
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          Storage
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          Console
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          TV
                        </a>
                      </li>
                     
                    </ul>
                  </div>
              </div>
   
            </>
        );
    }
}
 
export default TitleProduct;