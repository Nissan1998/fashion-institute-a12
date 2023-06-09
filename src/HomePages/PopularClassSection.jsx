import React, { useEffect, useState } from "react";
import PopularClassesCard from "../Components/PopularClassesCard";

const PopularClassSection = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("popularClasses.json")
      .then((res) => res.json())
      .then((data) => setClasses(data.classes));
  }, []);
  return (
    <div>
      <PopularClassesCard classes={classes}></PopularClassesCard>
    </div>
  );
};

export default PopularClassSection;
