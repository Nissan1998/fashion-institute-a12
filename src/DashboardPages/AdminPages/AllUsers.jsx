import { useQuery } from "@tanstack/react-query";
import React from "react";
import UsersTable from "./UsersTable";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
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
