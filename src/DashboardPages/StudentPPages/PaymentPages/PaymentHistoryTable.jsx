import React from "react";

const PaymentHistoryTable = ({ payments }) => {
  return (
    <div className="p-2 rounded-xl bg-blue-400">
      <div className="overflow-x-auto container mx-auto bg-white rounded-xl">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">SL</th>
              <th className="px-4 py-2">TransactionId ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Course Quantity</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                className="hover:bg-purple-400 hover:text-white"
                key={payment.id}
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{payment.transactionId}</td>
                <td className="border px-4 py-2">
                  {new Date(payment.date).toLocaleString()}
                </td>
                <td className="border px-4 py-2 text-center">
                  {payment.quantity}
                </td>
                <td className="border px-4 py-2 text-center">
                  ${payment.price}
                </td>
                <td className="border px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 text-sm font-semibold ${
                      payment.status === "Enrolled"
                        ? "text-green-800 bg-green-200"
                        : "text-yellow-800 bg-yellow-200"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
