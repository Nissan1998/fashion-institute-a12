import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = ({ cart, refetch }) => {
  const handleDelete = (item) => {
    Swal.fire({
      title: "YOU Want To Delete?",
      text: "You won't be able to Get it Any More",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Class has been Deleted From The Cart",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto  w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full font-semibold">
              {cart.map((classRow, index) => (
                <tr key={classRow._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classRow.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classRow.name}</td>
                  <td>${classRow.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(classRow)}
                      className="btn text-red-600 btn-ghost btn-xs"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
