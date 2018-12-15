import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
export class Slider extends Component {
  render() {
    return (
      <Carousel showThumbs={false}>
        <div>
          <img className="carousel-img" src="/images/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className="carousel-img" src="/images/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className="carousel-img" src="/images/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
} 