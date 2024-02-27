import React from "react";
import Slider from "react-slick";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div style={{padding:"30px"}}>
      <Slider {...settings}>
        <div>
          <Banner1/>
        </div>
        
        <div>
          <Banner2/>
        </div>
        
        <div>
          <Banner3/>
        </div>
        
        
      </Slider>
    </div>
  );
}

export default Fade;
