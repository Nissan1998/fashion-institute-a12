import React, { useState } from "react";
import useEnrolledClasses from "../../Hooks/useEnrolledClasses";

const MyEnrolledClasses = () => {
  const enrolledClasses = useEnrolledClasses();

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="table-auto w-full bg-white">
        <thead>
          <tr className="bg-orange-300">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Duration</th>

            <th className="px-4 py-2">Price</th>

            <th className="px-4 py-2">Instructor Name</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses.map((item) => (
            <tr
              className="hover:bg-gradient-to-br hover:from-purple-400 hover:to-green-300 font-semibold"
              key={item._id}
            >
              <td className="border px-4 py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.duration}</td>

              <td className="border px-4 py-2">${item.price}</td>

              <td className="border px-4 py-2">{item.instructorName}</td>
              <td className="border px-4 py-2 ">
                <p className="bg-success rounded-full px-4 text-white">Paid</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledClasses;
