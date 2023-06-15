import React, { useContext } from "react";
import useCart from "../../Hooks/useCart";
import MyCart from "./MyCart";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyClassesCart = () => {
  const [cart, refetch, isLoading] = useCart();
  const { loading } = useContext(AuthContext);
  if (isLoading || loading) {
    return <p className="text-white">Loading.........</p>;
  }
  const price = cart?.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="bg-gradient-to-r p-2 from-orange-300 to-orange-300 text-black max-w-5xl rounded-xl w-full">
      <div className="flex justify-between items-center rounded-full  bg-gradient-to-r from-pink-400 to-purple-700 p-2  font-bold">
        <h3 className="rounded-full bg-gradient-to-r from-blue-500 text-white to-purple-700 px-5 py-1">
          Total Selected Classes: {cart.length}
        </h3>
        <h3 className="rounded-full bg-gradient-to-r from-blue-500 text-white  to-purple-700 px-5 py-1">
          Total Price: ${price}
        </h3>
        <Link to="/dashboard/payment">
          <button className="rounded-full bg-gradient-to-r from-yellow-500 text-white  to-purple-700 px-5 py-1 hover:from-purple-700 hover:to-orange-500 ">
            Pay via Card
          </button>
        </Link>
      </div>

      <MyCart cart={cart} refetch={refetch}></MyCart>
    </div>
  );
};

export default MyClassesCart;
