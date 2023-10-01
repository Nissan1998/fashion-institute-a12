import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Tilt from "react-parallax-tilt";
import { HiBadgeCheck } from "react-icons/hi";

const PopularClassesCard = ({ classes }) => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div>
      <div className={`${darkMode ? "bg-slate-800" : "bg-gray-100"} py-8`}>
        <div className="max-w-5xl mx-auto  px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl font-semi text-center font-bold  underline decoration-wavy
          bold ${darkMode ? "text-white" : "text-gray-800"} mb-4`}
          >
            Popular Classes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 ">
            {classes.slice(0, 6)?.map((item, index) => (
              <Tilt key={index}>
                <div
                  key={index}
                  className="bg-white h-full rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-52 object-cover mb-4 rounded-2xl border border-blue-500"
                  />

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name.length <= 20
                      ? item.name
                      : item.name.slice(0, 20) + "..."}
                    {item.total_students >= 70 ? (
                      <HiBadgeCheck className="inline-block text-blue-600" />
                    ) : (
                      ""
                    )}
                  </h3>
                  <p className="text-gray-600 mb-2">{item?.duration}</p>
                  <p className="text-gray-600 mb-2">
                    Total Students: {item?.total_students}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Instructor:{" "}
                    <span className="font-semibold">{item.instructorName}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1l3.09 6.31 6.9.79-4.99 4.86 1.18 6.88L10 15.35l-6.08 3.6 1.18-6.88L.01 8.1l6.9-.79L10 1zm0 2.65L6.76 7.02l-4.27.49L5.6 10 4.49 14.48l3.5-2.07 3.5 2.07-1.11-4.47 3.51-2.07-4.27-.49L10 3.65z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-yellow-500">{item.rating}</p>
                    </div>
                    <p className="rounded-full bg-blue-700 px-4 text-white font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
