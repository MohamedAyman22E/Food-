import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/CartSlice";

const DishesProduct = ({
  id,
  cover,
  title,
  category,
  sub,
  price,
  qty,
  rate,
}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartAction.addToCart({ id, title, price, cover }));
  };
  return (
    <div className="box" key={id}>
      <div className="img">
        <img src={cover} alt="" />
      </div>
      <div className="allInfo">
        <div className="text">
          <div className="starsContent">
            <h5>
              {sub},{category}
            </h5>
            <div className="stars">
              {rate.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
          </div>
          <h3>{title}</h3>
          <h2 className="price">price ${price}</h2>
        </div>
        <button className="add" onClick={addToCart}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default DishesProduct;
