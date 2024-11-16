// app/dashboard/requests/page.js
import { Button } from "@/components/ui/button";

export default function ManageRequests() {
  const requests = [
    { id: 1, name: "Service Seeker 1", status: "Pending" },
    { id: 2, name: "Service Seeker 2", status: "Approved" },
  ];

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Service Requests</h1>
      {requests.map((request) => (
        <div
          key={request.id}
          className={`p-4 bg-white shadow rounded-lg flex justify-between items-center transition-transform transform hover:scale-105 ${
            request.status === "Pending" ? "border-l-4 border-yellow-500" : "border-l-4 border-green-500"
          }`}
        >
          <div>
            <p className="text-lg font-semibold">{request.name}</p>
            <p className="text-sm text-gray-500">Status: {request.status}</p>
          </div>
          <div className="space-x-2">
            <Button variant="default" className="hover:bg-blue-500 hover:text-white transition duration-200">Approve</Button>
            <Button variant="secondary" className="hover:bg-red-500 hover:text-white transition duration-200">Reject</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
