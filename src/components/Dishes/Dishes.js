import React, { useState } from "react";
import "./Dishes.css";
import "../Home/Home.css";
import { dishes } from "../../data/Data";
import DishesProduct from "./DishesProduct";

const Dishes = () => {
  const [menuItem, setMenuItem] = useState(dishes);

  const filterItem = category => {
    const newItem = dishes.filter(item => item.category === category);
    setMenuItem(newItem);
    if (category === "all") {
      setMenuItem(dishes);
      return;
    }
  };
  return (
    <div className="container containerDishes">
      <div className="heading">
        <h3>Popular dishes</h3>
        <h2>Popular dishes</h2>
      </div>
      <div className="allBtn">
        <button onClick={() => filterItem("all")} className="btn1">
          All
        </button>
        <button onClick={() => filterItem("BURGER")} className="btn1">
          BURGER
        </button>
        <button onClick={() => filterItem("PIZZA")} className="btn1">
          PIZZA
        </button>
        <button onClick={() => filterItem("BURGER")} className="btn1">
          BLUEBERRY SHAKE
        </button>
        <button onClick={() => filterItem("PIZZA")} className="btn1">
          CHICKEN CHUP
        </button>
        <button onClick={() => filterItem("BURGER")} className="btn1">
          ICE CREAM
        </button>
        <button onClick={() => filterItem("DRINK")} className="btn1">
          DRINK
        </button>
      </div>
      <div className="contentDishes">
        {menuItem.map(item => {
          return (
            <DishesProduct
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
              category={item.category}
              sub={item.sub}
              price={item.price}
              qty={item.qty}
              rate={item.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
