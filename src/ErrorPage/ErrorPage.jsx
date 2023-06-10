import React from "react";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import Error from "../assets/64553-404-error.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div>
      <div className="w-full h-[500px]  flex justify-center items-center ">
        <div className="h-[70vh] w-[600px]">
          <Lottie className="full" animationData={Error} loop={true}></Lottie>
          <h3 className="text-5xl text-center text-red-600">{error.message}</h3>
          <Link
            to="/"
            className="btn bg-gradient-to-r hover:btn-accent from-blue-500 to-pink-300  text-white w-full mt-5"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
