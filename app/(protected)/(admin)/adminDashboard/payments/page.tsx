// app/admin/payments/page.tsx
"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Edit, X } from "lucide-react"; // Import icons

// Initial mock data for payments
const initialPayments = [
  { id: 1, user: "John Doe", amount: 100, status: "Completed", date: "2024-10-01" },
  { id: 2, user: "Jane Smith", amount: 200, status: "Pending", date: "2024-10-02" },
];

// Utility function to format dates
const formatDate = (date) => new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PaymentManagementPage() {
  const [payments, setPayments] = useState(initialPayments);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPayment, setCurrentPayment] = useState(null);

  const handleProcessRefund = (id) => {
    if (window.confirm("Are you sure you want to process a refund for this payment?")) {
      setPayments((prev) =>
        prev.map((payment) =>
          payment.id === id ? { ...payment, status: "Refunded" } : payment
        )
      );
    }
  };

  const handleEditPayment = (payment) => {
    setCurrentPayment(payment);
    setModalOpen(true);
  };

  const handleUpdatePayment = () => {
    if (currentPayment) {
      setPayments((prev) =>
        prev.map((payment) => (payment.id === currentPayment.id ? currentPayment : payment))
      );
    }
    setModalOpen(false);
    setCurrentPayment(null);
  };

  const { user, amount, status, date } = currentPayment || {};

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Payment Management</h1>
      <p>Manage payments. Track transactions, process refunds, and view payment history.</p>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{payment.user}</td>
              <td className="py-2 px-4 border-b">${payment.amount}</td>
              <td className="py-2 px-4 border-b">{payment.status}</td>
              <td className="py-2 px-4 border-b">{formatDate(payment.date)}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                {payment.status === "Pending" ? (
                  <button
                    onClick={() => handleProcessRefund(payment.id)}
                    className="text-red-500"
                    title="Process Refund"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                ) : (
                  <button disabled className="text-gray-400" title="Cannot Refund Completed">
                    <XCircle className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => handleEditPayment(payment)}
                  className="text-blue-500"
                  title="Edit Payment"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Edit Payment */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Payment</h2>
            <div className="space-y-4">
              <p className="font-semibold">User: {user}</p>
              <label htmlFor="amount" className="block text-sm">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount || ""}
                onChange={(e) =>
                  setCurrentPayment((prev) => ({ ...prev, amount: parseFloat(e.target.value) }))
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="status" className="block text-sm">Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) =>
                  setCurrentPayment((prev) => ({ ...prev, status: e.target.value }))
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleUpdatePayment}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Update
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
