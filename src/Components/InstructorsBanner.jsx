import React from "react";
import cover from "../assets/images/instructorsbanner.png";
const InstructorsBanner = () => {
  return (
    <div
      className="h-[90vh] bg-cover object-cover "
      style={{ backgroundImage: `url(${cover})` }}
    ></div>
  );
};

export default InstructorsBanner;
