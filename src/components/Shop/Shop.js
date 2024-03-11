import React from "react";
import "./Shop.css";
import img1 from "../../images/d1.png";
import img2 from "../../images/d2.png";
import img3 from "../../images/cta_app.png";
const Shop = () => {
  return (
    <div className="">
      <div className="up">
        <div className="info">
          <span>Special Kombo Packr</span>
          <h2>WE MAKE THE BEST * BURGER IN YOUR TOWN</h2>
          <p>
            As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat. advice
            you to call us of before arriving As well known and we are very busy
            all days advice you
          </p>
          <div className="price">
            <button>ORDER NOW</button>
            <h3>
              $46.99 <sub>$59.99</sub>
            </h3>
          </div>
        </div>
      </div>
      <div className="down ">
        <div className="downImg">
          <img src={img3} alt="" />
        </div>
        <div className="downInfo">
          <span>Download App</span>
          <h2>BEST APP FOR FOOD DELIVERY</h2>
          <div className="flexImg">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
