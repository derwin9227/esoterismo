import "./carousel.scss";
import React from "react";

import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";

import C1 from "../../images/1.jpg";
import C2 from "../../images/2.jpg";
import C3 from "../../images/3.jpg";
import C4 from "../../images/4.jpg";
import C5 from "../../images/5.jpg";
import C6 from "../../images/6.jpg";
import C7 from "../../images/7.jpg";
import C8 from "../../images/8.jpg";
import C9 from "../../images/9.jpg";



const Carousel = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === "left"){
      current.scrollLeft -= 200;
    }else{
      current.scrollLeft += 200;
    }
  };

  return (
    <>
    <div className="slider" ref={scrollRef}>
      <img className="slider__img" src={C1} alt="carousel-1" />
      <img className="slider__img" src={C2} alt="carousel-2" />
      <img className="slider__img" src={C3} alt="carousel-3" />
      <img className="slider__img" src={C4} alt="carousel-4" />
      <img className="slider__img" src={C5} alt="carousel-5" />
      <img className="slider__img" src={C6} alt="carousel-6" />
      <img className="slider__img" src={C7} alt="carousel-7" />
      <img className="slider__img" src={C8} alt="carousel-8" />
      <img className="slider__img" src={C9} alt="carousel-9" />
      
    </div>
      <div className="slider__arrows">
        <div className="slider__arrows-left" onClick={() => scroll('left')}> <img src={arrowLeft} alt="left-arrow" /> </div>
        <div className="slider__arrows-right" onClick={() => scroll('right')}> <img src={arrowRight} alt="left-arrow" /> </div>
      </div>
    </>
  )
}

export default Carousel