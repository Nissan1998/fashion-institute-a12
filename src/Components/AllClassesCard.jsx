import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AllClassesCard = ({ classes }) => {
  const { darkMode, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    const { _id, name, image, price, instructorName } = item;
    console.log(item);
    if (user && user.email) {
      const courseItem = {
        courseId: _id,
        name,
        image,
        price,
        instructorName,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add To Cart Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "YOU HAVE TO LOGIN",
        text: "You won't be able to select this before login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="container relative mx-auto py-10">
      <div>
        {classes?.map((cl, index) => (
          <div
            key={index}
            className={`card card-side mb-5 max-w-5xl mx-auto  ${
              cl.available_seats === 0
                ? "bg-red-700 border-2 border-white text-white"
                : "bg-base-300"
            } shadow-xl border-b-8 hover:border-blue-700 border-blue-500`}
          >
            <figure>
              <img
                className=" w-60 h-full object-cover"
                src={cl?.image}
                alt={cl?.name}
              />
            </figure>
            <div>
              <div className="card-body">
                <h2 className="card-title">{cl?.name}</h2>
                <li>Duration: {cl?.duration}</li>
                <li>Total Students {cl?.total_students}</li>
                <li>
                  Price:{" "}
                  <span className="border-2 border-blue-600 rounded-full px-3 bg-blue-600 text-white font-bold">
                    ${cl?.price}
                  </span>
                </li>
                <li>Available Seats: {cl?.available_seats}</li>

                <Rating
                  style={{ maxWidth: 150 }}
                  value={cl.rating}
                  readOnly
                ></Rating>
                <div>
                  <span
                    className={` ${
                      cl.available_seats === 0
                        ? "bg-white text-gray-500"
                        : "bg-blue-500 text-white"
                    }   md:text-xl font-bold  pb-1  px-4  rounded-full`}
                  >
                    Instructor: {cl?.instructorName}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 md:left-auto md:right-0 md:top-1/2 mx-5">
              <button
                onClick={() => handleAddToCart(cl)}
                disabled={cl.available_seats === 0 ? true : false}
                className={`${
                  cl.available_seats === 0
                    ? "bg-white text-gray-400"
                    : "bg-blue-600 hover:bg-blue-700 hover:translate hover:scale-105 text-white"
                }   text-white px-4 rounded-full py-1 font-semibold`}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClassesCard;
