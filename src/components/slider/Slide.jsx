import "./Slider.css";
import img1 from "../../imgs/background1.jpg";
import img2 from "../../imgs/background2.jpg";
import img3 from "../../imgs/background3.jpg";
import img4 from "../../imgs/background4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <img src={img1} alt="background" />
        <img src={img2} alt="background" />
        <img src={img3} alt="background" />
        <img src={img4} alt="background" />
      </Slider>
    </div>
  );
};

export default Slide;
