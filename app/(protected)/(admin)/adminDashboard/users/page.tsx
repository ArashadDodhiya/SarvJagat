// app/admin/users/page.tsx
"use client";

import { useState } from "react";
import { Edit, Trash, X } from "lucide-react"; // Importing icons from lucide-react

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveUser = () => {
    if (!newUser.email.includes("@")) {
      setNotification("Please enter a valid email address.");
      return;
    }

    if (currentUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === currentUser.id ? { ...user, ...newUser } : user
        )
      );
      setNotification("User updated successfully!");
    } else {
      setUsers((prev) => [...prev, { id: Date.now(), ...newUser }]);
      setNotification("User added successfully!");
    }

    setModalOpen(false);
    resetForm();
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setNewUser(user);
    setModalOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setNotification("User deleted successfully!");
  };

  const resetForm = () => {
    setNewUser({ name: "", email: "", role: "User" });
    setCurrentUser(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h1 className="text-2xl font-semibold">User Management</h1>
      <p>Manage users: add, edit, delete, and search user accounts.</p>

      {notification && <p className="text-green-600">{notification}</p>}

      <div className="flex items-center justify-between">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add New User
        </button>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="text-blue-500"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-red-500"
                >
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
              onClick={() => {
                setModalOpen(false);
                resetForm();
              }}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {currentUser ? "Edit User" : "Add New User"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Enter user name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Enter user email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleSaveUser}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  resetForm();
                }}
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
