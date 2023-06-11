import React from "react";
import usePopularClass from "../Hooks/usePopularClass";
import AllClassesCard from "../Components/AllClassesCard";

const Classes = () => {
  const [classes] = usePopularClass();
  console.log(classes);
  return (
    <div>
      <div className="py-20">
        <AllClassesCard classes={classes}></AllClassesCard>
      </div>
    </div>
  );
};

export default Classes;
