import React, { useEffect, useState } from "react";

const usePopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch("https://fashion-institute-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return [instructors];
};

export default usePopularInstructors;
