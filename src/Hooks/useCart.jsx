import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");
  const {
    refetch,
    data: cart = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
