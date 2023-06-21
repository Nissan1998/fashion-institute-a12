import React, { useContext } from "react";
import PopularInstructorCard from "../Components/PopularInstructorCard";
import usePopularInstructors from "../Hooks/usePopularInstructors";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import InstructorsBanner from "../Components/InstructorsBanner";

const AllInstructors = () => {
  const [instructors] = usePopularInstructors();
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`${darkMode ? "bg-slate-900" : "bg-base-200"}`}>
      <InstructorsBanner />
      <div className="grid grid-cols-1 container mx-auto pt-24  sm:grid-cols-2 md:grid-cols-2  gap-8 ">
        {instructors?.map((instructor, index) => (
          <PopularInstructorCard
            key={index}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
