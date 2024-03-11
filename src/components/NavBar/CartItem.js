import React from "react";
import "./CartIem.css";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/CartSlice";

export const CartItem = ({ id, cover, price, quantity, totalPrice, name }) => {
  const dispatch = useDispatch();
  const inCrement = () => {
    dispatch(cartAction.addToCart({ id, name, price }));
  };
  const deCrement = () => {
    dispatch(cartAction.removeFromCart(id));
  };

  return (
    <div className="productItem" key={id}>
      <div className="img flex">
        <img src={cover} alt="" />
        <span className="closeItem">
          <IoClose />
        </span>
      </div>
      <div className="details flex">
        <span className="nameItem">Unit Price${price}</span>
        <div className="btn">
          <span className="minus " onClick={deCrement}>
            <FaMinus />
          </span>
          <span className="equal">{quantity}</span>
          <span className="plus" onClick={inCrement}>
            <FaPlus />
          </span>
        </div>
      </div>
      <div className="price flex">
        <span className="numberOfPrice">${totalPrice}</span>
      </div>
    </div>
  );
};
