import React from "react";
import "./CheckOut.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Store/CartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckOut = ({ total, handelPaymentSuccess }) => {
  const dispatch = useDispatch();
  const handelCheck = token => {
    handelPaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handelCheck}
        stripeKey="pk_test_51Osu2SG5KpaoiH2NHY3c1xtC1FUPC4BbN1Fwj2r0ii0AATNzQv6ToLmJ6GLr6Z8phzwWwIwhSNxgk8vl9MaxgZbT005OTv5MnR"
        amount={total * 100}
        // this beacuse in strip amount will be in cents so multiple by 100
        name="Food Store"
        email="aymanmihamed643@gmail.com"
        description="payment test using stripe checkout"
      >
        <button className="check">Pay ${total}</button>;
      </StripeCheckout>
    </>
  );
};
