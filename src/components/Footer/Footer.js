import React from "react";
import "./Footer.css";
import { blog, navList } from "../../data/Data";
export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="top">
        <div className="headingFooter">
          <h2>SUBSCRIBE NEWSLETTER</h2>
        </div>
        <div className="from">
          <form action="">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <div className="box one">
          <h2>ABOUT FRUDBAZ</h2>
          <p>
            Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="box two">
          <h2>CONTACT US</h2>
          <ul>
            <li>
              <span>ADDRESS :</span> 8638 Amarica Stranfod Mailbon Star,
              California, TX 70240
            </li>
            <li>
              <span>MAIL :</span> support@example.com
            </li>
            <li>
              <span>PHONE :</span>+7464 0187 3535 645
            </li>
            <li>
              <span>FAX ID :</span>+9 659459 49594
            </li>
          </ul>
        </div>
        <div className="box three">
          <h2>LINKS</h2>
          <ul>
            {navList.map((e, index) => {
              return <li key={index}>{e.text}</li>;
            })}
          </ul>
        </div>
        <div className="box four">
          <h2>RECENT BLOG</h2>
          <ul className="">
            {blog.map(x => {
              if (x.id <= 2) {
                return (
                  <li key={x.id}>
                    <div className="img">
                      <img src={x.cover} alt="" />
                    </div>
                    <div className="infoBox4">
                      <h3>{x.name}</h3>
                      <h4>{x.date}</h4>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
