import React from "react";
import { FaTransgenderAlt, FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersTable = ({ users, refetch }) => {
  // make Admin action
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "YOU WANT TO MAKE HIM AS ADMIN?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, ADMIN NOW",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fashion-institute-server.vercel.app/users/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Made Admin",
                timer: 1500,
              });
            }
          });
      }
    });
  };

  // make instructor action
  const handleMakeInstructor = (id) => {
    fetch(
      `https://fashion-institute-server.vercel.app/users/instructor/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Made Admin",
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase  ">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>
              <p className="w-2/3 text-center bg-lime-400 rounded-full font-bold">
                Role
              </p>
            </th>
            <th className="text-center">
              <p className="bg-red-600 text-white rounded-full">Action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="font-semibold text-xl" key={index}>
              <th>{index + 1}</th>
              <td className="">{user.name}</td>
              <td>{user.email}</td>

              <td>
                {user?.role === "Admin" && (
                  <p className="text-center bg-red-700  text-white rounded-full px-2 py-px text-sm mr-5">
                    {user.role}
                  </p>
                )}
                {user?.role === "Instructor" && (
                  <p className="text-center bg-yellow-300  text-gray-900 rounded-full px-2 py-px text-sm  mr-5">
                    {user.role}
                  </p>
                )}
                {!user?.role && (
                  <p className="text-center bg-success text-white rounded-full px-2 py-px text-sm mr-5">
                    Student
                  </p>
                )}
              </td>

              <td className="text-center">
                <button
                  onClick={() => handleMakeAdmin(user._id)}
                  className="text-center bg-purple-600 hover:bg-purple-900 text-white rounded-full px-2 py-px text-sm mr-5"
                >
                  Admin
                </button>
                <button
                  onClick={() => handleMakeInstructor(user._id)}
                  className="text-center hover:bg-purple-900 bg-purple-600 text-white rounded-full px-2 py-px text-sm "
                >
                  Instructor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
