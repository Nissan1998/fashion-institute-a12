import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: cart = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("response", response);
      return response.data;
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
