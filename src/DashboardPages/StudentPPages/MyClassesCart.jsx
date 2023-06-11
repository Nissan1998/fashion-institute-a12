import React from "react";
import useCart from "../../Hooks/useCart";
import MyCart from "./MyCart";

const MyClassesCart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="bg-gradient-to-r p-2 from-orange-300 to-orange-300 text-black max-w-5xl rounded-xl w-full">
      <div className="flex justify-between items-center rounded-full  bg-gradient-to-r from-pink-400 to-purple-700 p-2  font-bold">
        <h3 className="rounded-full bg-gradient-to-r from-blue-500 text-white to-purple-700 px-5 py-1">
          Total Selected Classes: {cart.length}
        </h3>
        <h3 className="rounded-full bg-gradient-to-r from-blue-500 text-white  to-purple-700 px-5 py-1">
          Total Price: ${price}
        </h3>
        <button className="rounded-full bg-gradient-to-r from-blue-500 text-white  to-purple-700 px-5 py-1 hover:from-purple-700 hover:to-orange-300 ">
          Pay via Card
        </button>
      </div>

      <MyCart cart={cart} refetch={refetch}></MyCart>
    </div>
  );
};

export default MyClassesCart;
