import React from "react";
import "./Stuff.css";
import { team, customer, cdata } from "../../data/Data";
const Stuff = () => {
  return (
    <div>
      <div className="allTeam container">
        <div className="heading">
          <span>Our Professional</span>
          <h2>MEET OUR STUFF</h2>
        </div>
        <div className="allTeamBox">
          {team.map(e => {
            return (
              <div className="box" key={e.id}>
                <div className="img">
                  <img src={e.cover} alt="" />
                </div>
                <h2>{e.name}</h2>
                <span>{e.exper}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="teamBottom">
        <div className="info">
          <span>Customer Feedback</span>
          <h2>WHAT DO OUR CLIENTS SAY?</h2>
          <p>
            Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ore eu fuulla pariatur. Excepteur
            sint occaecat cupidatat non proideney.
          </p>
          <ul>
            {cdata.map((x, index) => {
              return (
                <li key={index}>
                  <h3>{x.num}</h3>
                  <h4>{x.name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="customers">
          {customer.map(customerX => {
            return (
              <div className="cus" key={customerX.id}>
                <div className="img">
                  <img src={customerX.cover} alt="" />
                </div>
                <p>{customerX.desc}</p>
                <h2>{customerX.name}</h2>
                <h3>{customerX.post}</h3>
                {customerX.rate.map((star, starItem) => (
                  <span key={starItem}>{star}</span>
                ))}
                <h4>{customerX.ratenum}</h4>

                <span className="quite">{customerX.icon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stuff;
