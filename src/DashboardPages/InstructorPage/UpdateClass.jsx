import React from "react";
import MyClassesCard from "./MyClassesCard";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useEffect } from "react";

const UpdateClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setMyClasses] = useState([]);
  useEffect(() => {
    fetch(`https://fashion-institute-server.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => data.map((myClass) => setMyClasses(myClass)));
  }, [user]);
  return (
    <div>
      <input type="text" defaultValue={classes.names} />
    </div>
  );
};

export default UpdateClass;
