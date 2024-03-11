import React from "react";
import img from "../../images/offer_img.png";
import "./About.css";
const About = () => {
  return (
    <div className="container aboutContainer">
      <div className="aboutInfo">
        <span>Special Offer</span>
        <h2>GOOD FOOD, DRINKS & GREAT COMPANY.</h2>
        <p>
          As well known and we are very busy all days advice you. advice you to
          call us of before arriving, so we can guarantee your seat. advice you
          to call us of before arriving As well known and we are very busy all
          days advice you
        </p>
        <div className="price">
          <button>ORDER NOW</button>
          <h3>
            $46.99 <sub>$59.99</sub>
          </h3>
        </div>
      </div>
      <div className="aboutImg">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
