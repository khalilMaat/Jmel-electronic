import React, { Component } from "react";

class Deal extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* HOT DEAL TIMER */}

        <div id="hot-deal" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hot-deal">
                  <ul className="hot-deal-countdown">
                    <li>
                      <div>
                        <h3>05</h3>
                        <span>Days</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>13</h3>
                        <span>Hours</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>44</h3>
                        <span>Mins</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>10</h3>
                        <span>Secs</span>
                      </div>
                    </li>
                  </ul>
                  <h2 className="text-uppercase">hot deal this week</h2>
                  <p>New Collection Up to 50% OFF</p>
                  <a className="primary-btn cta-btn" href="#">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /HOT DEAL TIMER */}
      </div>
    );
  }
}

export default Deal;
