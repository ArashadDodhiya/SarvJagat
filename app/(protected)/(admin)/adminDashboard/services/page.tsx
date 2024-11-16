"use client";

import { useState } from "react";
import { Edit, Trash, X } from "lucide-react"; // Import icons

type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
};

const initialServices: Service[] = [
  { id: 1, name: "Website Development", description: "Full stack web development services.", category: "Development" },
  { id: 2, name: "SEO Optimization", description: "Improve your site's search engine ranking.", category: "Marketing" },
];

const categories = ["Development", "Marketing", "Design", "Consulting"];

export default function ServiceManagementPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Service>({ id: 0, name: "", description: "", category: "" });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveService = () => {
    if (newService.name && newService.description && newService.category) {
      if (currentService) {
        // Ensure that the `id` field is not overwritten while editing an existing service
        setServices((prev) =>
          prev.map((service) => (service.id === currentService.id ? { ...service, ...newService } : service))
        );
      } else {
        // If it's a new service, add a new `id` using `Date.now()`
        setServices((prev) => [
          ...prev,
          { ...newService, id: Date.now() }, // Add `id` explicitly here
        ]);
      }
      setModalOpen(false);
      setNewService({ id: 0, name: "", description: "", category: "" });
      setCurrentService(null);
    } else {
      alert("Please fill in all fields.");
    }
  };
  

  const handleEditService = (service: Service) => {
    setCurrentService(service);
    setNewService(service);
    setModalOpen(true);
  };

  const handleDeleteService = (id: number) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((service) => service.id !== id));
    }
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Service Management</h1>
      <p>Manage services offered. Add, edit, and delete services available in the platform.</p>

      <input
        type="text"
        placeholder="Search services"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add New Service
      </button>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b">Service Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service) => (
            <tr key={service.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{service.name}</td>
              <td className="py-2 px-4 border-b">{service.description}</td>
              <td className="py-2 px-4 border-b">{service.category}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button onClick={() => handleEditService(service)} className="text-blue-500">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteService(service.id)} className="text-red-500">
                  <Trash className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">{currentService ? "Edit Service" : "Add New Service"}</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={newService.name}
                onChange={handleInputChange}
                placeholder="Enter service name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={newService.description}
                onChange={handleInputChange}
                placeholder="Enter service description"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="category"
                value={newService.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleSaveService}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
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
