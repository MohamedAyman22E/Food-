import React from "react";
import "./Home.css";
import img from "../../images/hero.png";
import { hero, menu } from "../../data/Data";
import { FaFacebookF, FaGithub, FaInstagram, FaPlay } from "react-icons/fa";
import About from "../About/About";
import Dishes from "../Dishes/Dishes";
import Shop from "../Shop/Shop";
import Stuff from "../Stuff/Stuff";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div className="hero ">
      <div className="container">
        <div className="heroTop">
          <div className="home">
            <div className="box left">
              <span>medium 2-topping burger</span>
              <h2 className="uText">are you hungry?</h2>
              <p>
                as well know and we are very busy all days advice you. advice
                you to call us of before arriving
              </p>
              <div className="allBtn">
                <button className="btn1 uText">learn more</button>
                <button className="btn2 uText">see our menu </button>
              </div>
            </div>
            <div className=" box  center">
              <img src={img} alt="" />
            </div>
            <div className=" box  right">
              <ul>
                {hero.map(e => {
                  return (
                    <li key={e.id}>
                      <div className="info">
                        <h2>{e.title}</h2>
                        <p>{e.desc}</p>
                      </div>
                      <div className="num">
                        <span>0{e.id}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="iconBottom">
              <span className="social">
                <FaFacebookF /> facebook
              </span>
              <span className="social">
                <FaGithub /> github
              </span>
              <span className="social">
                <FaInstagram /> instagram
              </span>
            </div>
            <div className="playIcon">
              <h2>PLAY VIDEO</h2>
              <span className="play">
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
        <div className="aboutHero">
          <div className="heading">
            <h3>Our Popular Menu</h3>
            <h2>WENT TO EAT?</h2>
          </div>
          <div className="allAboutHero">
            {menu.map(card => {
              return (
                <div className="box" key={card.id}>
                  <div className="info">
                    <span>{card.icon}</span>
                    <h2 className="heading">{card.title}</h2>
                    <p>{card.desc}</p>

                    <div className="img">
                      <img src={card.cover} alt="" />
                    </div>
                    <h3>0{card.id}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <About />
      <Dishes />
      <Shop />
      <Stuff />
      <Blog />
    </div>
  );
};

export default Home;
