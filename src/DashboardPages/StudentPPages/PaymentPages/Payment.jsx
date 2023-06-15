import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const Payment = () => {
  const [cart] = useCart();

  const total = cart?.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log(price);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
  return (
    <div>
      <h1 className="text-center text-white text-3xl">
        CheckOut Payment
        <span className="text-emerald-400 font-bold"> ${price}</span>
      </h1>
      <div className="bg-white p-2 rounded-lg">
        <div className="bg-gradient-to-tl from-red-700 to-slate-700 text-white w-96 p-5 rounded-xl ">
          <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
