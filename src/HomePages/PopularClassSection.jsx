import React, { useEffect, useState } from "react";
import PopularClassesCard from "../Components/PopularClassesCard";
import usePopularClass from "../Hooks/usePopularClass";

const PopularClassSection = () => {
  const [classes] = usePopularClass();
  return (
    <div>
      <PopularClassesCard classes={classes}></PopularClassesCard>
    </div>
  );
};

export default PopularClassSection;
