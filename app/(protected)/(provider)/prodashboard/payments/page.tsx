// app/dashboard/payments/page.js
export default function Payments() {
    const payments = [
      { id: 1, amount: "$200", date: "2024-10-01", status: "Paid" },
      { id: 2, amount: "$500", date: "2024-10-15", status: "Pending" },
    ];
  
    return (
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold mb-4">Payment History</h1>
        {payments.map((payment) => (
          <div
            key={payment.id}
            className={`p-4 bg-white shadow rounded-lg flex justify-between items-center transition-transform transform hover:scale-105 ${
              payment.status === "Paid" ? "border-l-4 border-green-500" : "border-l-4 border-yellow-500"
            }`}
          >
            <div>
              <p className="font-semibold">{payment.date}</p>
              <p className="text-gray-500">Status: {payment.status}</p>
            </div>
            <p className={`text-lg font-bold ${payment.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
              {payment.amount}
            </p>
          </div>
        ))}
      </div>
    );
  }
  