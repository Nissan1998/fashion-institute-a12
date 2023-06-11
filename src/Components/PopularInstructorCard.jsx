import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const PopularInstructorCard = ({ instructor }) => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div
      className={`card card-side mb-5  ${
        darkMode
          ? "bg-slate-700 border-2 border-white text-white"
          : "bg-base-100"
      } shadow-xl border-b-8 hover:border-blue-700 border-blue-500`}
    >
      <figure>
        <img
          className=" w-60 h-full"
          src={instructor.image}
          alt={instructor.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor.name}</h2>
        <li>Experience: {instructor.experience}</li>
        <li>Total Classes Conducted: {instructor.totalClassConducted}</li>
        <li>Available Slots: {instructor.availableSlots}</li>
        <li>Total Students: {instructor.totalStudent}</li>
        <Rating
          style={{ maxWidth: 150 }}
          value={instructor.rating}
          readOnly
        ></Rating>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
