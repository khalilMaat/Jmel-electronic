import React, { Component } from "react";
import "../Slider.css";

class Slider extends Component {
  state = {};

  render() {
    //var
    let img__slider;
    let etape = 0;
    let nbr__img = 3;

    //run table image
    function enleverActiveImages() {
      img__slider = document.getElementsByClassName("img__slider");
      for (let i = 0; i < nbr__img; i++) {
        if (img__slider.length > 0) {
          img__slider[i].classList.remove("active");
        }
      }
    }
    //Move Left
    function Suivant() {
      etape++;
      if (etape >= nbr__img) {
        etape = 0;
      }
      enleverActiveImages();
      if (img__slider.length > 0) {
        img__slider[etape].classList.add("active");
      }
    }
    //Move Right
    function Precedent() {
      etape--;
      if (etape < 0) {
        etape = nbr__img - 1;
      }
      enleverActiveImages();
      if (img__slider.length > 0) {
        img__slider[etape].classList.add("active");
      }
    }

    //Auto Move
    setInterval(function() {
      etape++;
      if (etape >= nbr__img) {
        etape = 0;
      }
      enleverActiveImages();
      if (img__slider.length > 0) {
        img__slider[etape].classList.add("active");
      }
    }, 4000);

    return (
      <div className="slider">
        <img
          src="./img/pub1.jpg"
          alt="img1"
          className="img__slider active"
        />
        <img src="./img/pub2.jpg" alt="img2" className="img__slider" />
        <img src="./img/pub3.jpg" alt="img3" className="img__slider" />
        <div className="btn">
          <div className="suivant">
            <button onClick={Suivant}>
              <i className="fas fa-chevron-circle-right fa-2x"></i>
            </button>
          </div>
          <div className="precedent">
            <button onClick={Precedent}>
              <i className="fas fa-chevron-circle-left fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
