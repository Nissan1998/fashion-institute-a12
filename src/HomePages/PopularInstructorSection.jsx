import React, { useContext, useEffect, useState } from "react";
import PopularInstructorCard from "../Components/PopularInstructorCard";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import usePopularInstructors from "../Hooks/usePopularInstructors";

const PopularInstructorSection = () => {
  const { darkMode } = useContext(AuthContext);
  const [instructors] = usePopularInstructors();
  const [all, setAll] = useState(6);
  const handleShow = () => {
    setAll(instructors?.length);
  };

  return (
    <div>
      <div
        className={`max-w-9xl mx-auto ${
          darkMode ? "bg-slate-800 text-white" : "bg-base-200"
        } w-full  px-4 sm:px-6 lg:px-8`}
      >
        <h2 className="text-3xl font-bold text-center py-8 underline decoration-wavy">
          Popular Instructors
        </h2>
        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  gap-8 ">
          {instructors?.slice(0, all).map((instructor, index) => (
            <PopularInstructorCard
              key={index}
              instructor={instructor}
              index={index}
            ></PopularInstructorCard>
          ))}
        </div>
        <div
          onClick={handleShow}
          className="bg-orange-400 w-32 mx-auto rounded"
        >
          {all === instructors.length ? (
            ""
          ) : (
            <button className="bg-blue-500 hover:scale-105 translate-x-0 hover:text-orange-400 duration-100  md:px-5 p-5 py-2 w-32 rounded-xl text-white font-bold ">
              See All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorSection;
