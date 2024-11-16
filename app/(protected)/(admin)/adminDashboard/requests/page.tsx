// app/admin/requests/page.tsx
"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Edit, X } from "lucide-react"; // Import icons

// Define types for request data
interface Request {
  id: number;
  user: string;
  requestType: string;
  status: "Pending" | "Approved" | "Rejected"; // Status should be one of these values
}

// Initial mock data for requests
const initialRequests: Request[] = [
  { id: 1, user: "John Doe", requestType: "Service Inquiry", status: "Pending" },
  { id: 2, user: "Jane Smith", requestType: "Feature Request", status: "Pending" },
];

export default function RequestManagementPage() {
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState<Request | null>(null); // Typing currentRequest as Request or null

  // Handle approve request
  const handleApproveRequest = (id: number) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  // Handle reject request
  const handleRejectRequest = (id: number) => {
    if (window.confirm("Are you sure you want to reject this request?")) {
      setRequests((prev) =>
        prev.map((request) =>
          request.id === id ? { ...request, status: "Rejected" } : request
        )
      );
    }
  };

  // Handle edit request
  const handleEditRequest = (request: Request) => {
    setCurrentRequest(request);
    setModalOpen(true);
  };

  // Handle update request after editing
  const handleUpdateRequest = () => {
    if (currentRequest) {
      setRequests((prev) =>
        prev.map((request) =>
          request.id === currentRequest.id ? { ...currentRequest } : request
        )
      );
    }
    setModalOpen(false);
    setCurrentRequest(null); // Reset after update
  };

  // Destructure `currentRequest` for easier access
  const { user, requestType, status } = currentRequest || {};

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Request Management</h1>
      <p>Review and process user requests. Approve, reject, or update requests as needed.</p>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Request Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{request.user}</td>
              <td className="py-2 px-4 border-b">{request.requestType}</td>
              <td className="py-2 px-4 border-b">{request.status}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleApproveRequest(request.id)}
                  className="text-green-500"
                  title="Approve"
                >
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleRejectRequest(request.id)}
                  className="text-red-500"
                  title="Reject"
                >
                  <XCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleEditRequest(request)}
                  className="text-blue-500"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Edit Request */}
      {isModalOpen && currentRequest && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Request</h2>
            <div className="space-y-4">
              <p className="font-semibold">User: {user}</p>
              <p className="font-semibold">Request Type: {requestType}</p>
              <label htmlFor="status" className="block text-sm">Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) =>
                  setCurrentRequest((prev) =>
                    prev ? { ...prev, status: e.target.value as "Pending" | "Approved" | "Rejected" } : prev
                  )
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleUpdateRequest}
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
