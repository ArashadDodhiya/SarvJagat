"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for analytics
const mockData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "User Signups",
      data: [30, 45, 20, 60, 80, 70],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Payments Processed",
      data: [10, 20, 30, 25, 35, 45],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

export default function AnalyticsPage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date("2024-01-01"));
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const kpis = {
    totalUsers: 350,
    totalServices: 150,
    totalPayments: 15000,
    userSatisfaction: 4.5,
    growthRate: "15%",
    retentionRate: "87%",
    avgTransactionValue: "$200",
  };

  const handleDownloadReport = () => {
    // Implement CSV or PDF download logic
    console.log("Report Downloaded");
    // Example: You can use libraries like jsPDF or papaparse
  };

  const applyDateFilter = () => {
    if (!startDate || !endDate) {
      alert("Please select valid start and end dates.");
      return;
    }
    if (startDate > endDate) {
      alert("Start date cannot be after the end date.");
      return;
    }
    console.log("Date Filter Applied:", startDate, endDate);
    // Implement logic to filter chart data based on dates
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Analytics</h1>
      <p>View platform analytics and performance metrics.</p>

      {/* Date Filter */}
      <div className="flex flex-wrap gap-4 mt-4">
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-semibold mb-1"
          >
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            className="border px-3 py-2 rounded-md"
            dateFormat="MMMM d, yyyy"
            placeholderText="Select start date"
            aria-label="Select start date"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-semibold mb-1">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            className="border px-3 py-2 rounded-md"
            dateFormat="MMMM d, yyyy"
            placeholderText="Select end date"
            aria-label="Select end date"
          />
        </div>
        <button
          onClick={applyDateFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>

      {/* Chart Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          User Signups and Payments Over Time
        </h2>
        <Bar
          data={mockData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Analytics Overview",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>

      {/* Additional Analytics */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Total Users: {kpis.totalUsers}</li>
          <li>Total Services: {kpis.totalServices}</li>
          <li>Total Payments Processed: ${kpis.totalPayments}</li>
          <li>Average User Satisfaction: {kpis.userSatisfaction}/5</li>
          <li>Growth Rate: {kpis.growthRate}</li>
          <li>Retention Rate: {kpis.retentionRate}</li>
          <li>Average Transaction Value: {kpis.avgTransactionValue}</li>
        </ul>
      </div>

      {/* Download Report Button */}
      <div className="mt-4">
        <button
          onClick={handleDownloadReport}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Download Report
        </button>
      </div>
    </div>
  );
}
