import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const useEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClasses, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      `https://fashion-institute-server.vercel.app/paidCourse?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });

  return enrolledClasses;
};

export default useEnrolledClasses;
