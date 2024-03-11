import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import "./Cart.css";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CheckOut } from "./CheckOut";
export const Card = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const closeCart = () => {
    setCartOpen(null);
  };
  // add new product
  const quantity = useSelector(state => state.cart.totalQuantity);
  const allCartItem = useSelector(state => state.cart.itemList);
  let total = 0;
  const itemLists = useSelector(state => state.cart.itemList);
  const handelPaymentSuccess = () => {};
  itemLists.forEach(item => (total += item.totalPrice));
  return (
    <>
      <div className="cart">
        <div className="cards bigIcon" onClick={() => setCartOpen(!cartOpen)}>
          <FaBasketShopping className="icon" />
          <span className="numOfOrdered">{quantity}</span>
        </div>
        <div className={cartOpen ? "overlay" : "nonOverlay"}></div>
        <div className={cartOpen ? "cartIem cartIndex" : "cardHide cartIndex"}>
          <span className="close" onClick={() => closeCart()}>
            <IoClose />
          </span>
          <h2>Shopping Cart</h2>

          <div className="allProducts">
            {allCartItem.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                cover={item.cover}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                name={item.name}
              />
            ))}
          </div>
          <div>
            <CheckOut
              total={total}
              handelPaymentSuccess={handelPaymentSuccess}
            />
          </div>
        </div>
      </div>
    </>
  );
};
