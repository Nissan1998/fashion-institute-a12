import React, { useEffect, useState } from "react";

const usePopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("popularClasses.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return [classes];
};

export default usePopularClass;
// http://localhost:5000/classes
