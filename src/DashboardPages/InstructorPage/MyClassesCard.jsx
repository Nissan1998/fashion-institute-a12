import React from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const MyClassesCard = ({ course, index }) => {
  console.log(course);
  return (
    <tr>
      <th>
        <p>{index + 1}</p>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={course.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{course.name}</div>
          <span className="badge badge-ghost badge-sm">{course.category}</span>
        </div>
      </td>
      <td>
        <p className="text-right">${course.price}</p>
      </td>
      <td>
        <p className="text-center">{course.modules}</p>
      </td>
      <td>
        <p className="text-center">{course.duration}</p>
      </td>
      <td>
        <p className="text-center">{course.total_students}</p>
      </td>
      <td>
        {course.status === "Approved" && (
          <p className="bg-[#B8F7D4] text-black text-center text-sm rounded-full py-1 px-3 font-semibold">
            {course.status}
          </p>
        )}
        {course.status === "Denied" && (
          <p className="bg-[#F8B8A2] text-black text-center text-sm rounded-full py-1 px-3 font-semibold">
            {course.status}
          </p>
        )}
        {course.status === "pending" && (
          <p className="bg-[#FFFF99] text-black text-center text-sm rounded-full py-1 px-3 font-semibold">
            {course.status}
          </p>
        )}
      </td>
      <td>
        <p>{course.feedback}</p>
      </td>
      <td>
        <Link to={`/dashboard/updateClass/${course._id}`}>
          <button>
            <TfiPencilAlt className="text-xl"></TfiPencilAlt>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyClassesCard;
