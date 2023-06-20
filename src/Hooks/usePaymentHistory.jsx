import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const usePaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: paymentHistory = [],
    isLoading,
  } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/payment-history/${user?.email}`);
      console.log("response", response);
      return response.data;
    },
  });
  return [paymentHistory, refetch, isLoading];
};

export default usePaymentHistory;
