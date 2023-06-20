import React from "react";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const [paymentHistory] = usePaymentHistory();
  return (
    <div>
      <h3 className="text-center text-3xl my-5 text-white">
        My Payment History
      </h3>
      <PaymentHistoryTable payments={paymentHistory}></PaymentHistoryTable>
    </div>
  );
};

export default PaymentHistory;
