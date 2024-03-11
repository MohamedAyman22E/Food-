import React, { useState } from "react";
import "../../App.css";
import "./NavBar.css";
import logoImg from "../../images/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { navList } from "../../data/Data";
import { Card } from "./card";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY <= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
  //

  return (
    <div>
      <nav className={nav ? "container " : "container navContainerActive"}>
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <div className={menu ? "navListActive navList" : "navList"}>
          <ul className="">
            {navList.map((e, index) => {
              return (
                <li key={index}>
                  <NavLink to={e.path} className="cText">
                    {e.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <div className="form">
            <form action="">
              <input type="text" placeholder="Search Keywords" />
              <span className="search">
                <IoIosSearch />
              </span>
            </form>
          </div>
          <div className="iconRedux">
            <div className="cart">
              <Card />
            </div>
            <div className="heart bigIcon">
              <FaHeart className="icon" />
              <span className="numOfHeart">0</span>
            </div>
            <div className="menu" onClick={() => setMenu(!menu)}>
              <RiMenu3Line />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
