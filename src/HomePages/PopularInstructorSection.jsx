import React, { useContext, useEffect, useState } from "react";
import PopularInstructorCard from "../Components/PopularInstructorCard";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import usePopularInstructors from "../Hooks/usePopularInstructors";

const PopularInstructorSection = () => {
  const { darkMode } = useContext(AuthContext);
  const [instructors] = usePopularInstructors();
  return (
    <div
      className={`max-w-9xl mx-auto ${
        darkMode ? "bg-slate-800 text-white" : "bg-base-200"
      } w-full  px-4 sm:px-6 lg:px-8`}
    >
      <h2 className="text-3xl font-bold text-center py-8 underline decoration-wavy">
        Popular Instructors
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  gap-8 ">
        {instructors?.slice(0, 6).map((instructor, index) => (
          <PopularInstructorCard
            key={index}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructorSection;
