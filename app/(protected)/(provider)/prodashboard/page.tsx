"use client"
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register all necessary components
Chart.register(...registerables);

export default function DashboardOverview() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Earnings",
        data: [3000, 5000, 2000, 4000, 6000, 3000, 7000],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const, // Use 'as const' to enforce the literal type
        intersect: false,
      },
    },
    scales: {
      y: {
        type: 'linear', // Specify the type of scale
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Bookings Card */}
      <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Total Bookings</h2>
        <p className="text-4xl mt-4">120</p>
        <div className="flex items-center mt-2">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12h2m2 0h16M3 6h2m2 0h16M3 18h2m2 0h16"
            />
          </svg>
          <span>View Details</span>
        </div>
      </div>

      {/* Earnings This Month Card */}
      <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Earnings This Month</h2>
        <p className="text-4xl mt-4">$5000</p>
        <div className="flex items-center mt-2">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12h-4m-4 0h4m4 0a4 4 0 00-8 0h8zm0 0v4m0-4v-4m0 0h-4"
            />
          </svg>
          <span>View Earnings</span>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="col-span-1 md:col-span-2 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Earnings Over Time</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
