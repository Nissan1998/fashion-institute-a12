import React, { useEffect, useState } from "react";

const usePopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://fashion-institute-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return [classes];
};

export default usePopularClass;
