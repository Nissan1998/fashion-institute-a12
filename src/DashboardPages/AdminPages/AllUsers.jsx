import { useQuery } from "@tanstack/react-query";
import React from "react";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <h3 className="text-white text-center font-bold bg-purple-700 rounded-full rounded-b-none">
        Total Users : {users.length}
      </h3>
      <div className="bg-purple-700 p-2">
        <UsersTable users={users} refetch={refetch}></UsersTable>
      </div>
    </div>
  );
};

export default AllUsers;
