"use client";

import { useState } from "react";

export default function SettingsPage() {
  // State to manage the settings
  const [settings, setSettings] = useState({
    siteName: "My Platform",
    adminEmail: "admin@example.com",
    userRole: "admin",
    theme: "light", // New theme state
    notifications: true, // New notification preference state
  });

  const [message, setMessage] = useState(""); // For feedback messages

  // Handle input changes
  // Handle input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value, type } = e.target;

  if (type === "checkbox") {
    // TypeScript now knows that e.target is an HTMLInputElement
    const { checked } = e.target as HTMLInputElement; // Narrow to HTMLInputElement
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked, // Use `checked` for checkbox type
    }));
  } else {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value, // Use `value` for text inputs and selects
    }));
  }
};
  

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!settings.adminEmail.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Here you would typically send the updated settings to your backend
    console.log("Updated Settings:", settings);
    setMessage("Settings have been updated!"); // Feedback
  };

  // Reset to default values
  const handleReset = () => {
    setSettings({
      siteName: "My Platform",
      adminEmail: "admin@example.com",
      userRole: "admin",
      theme: "light",
      notifications: true,
    });
    setMessage("Settings have been reset to default values.");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <p className="mb-4">Manage platform settings, including user roles, permissions, and general configurations.</p>
      
      {message && <div className="mb-4 text-green-600">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter site name"
          />
        </div>
        <div>
          <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">Admin Email</label>
          <input
            type="email"
            id="adminEmail"
            name="adminEmail"
            value={settings.adminEmail}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter admin email"
            required
          />
        </div>
        <div>
          <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">Default User Role</label>
          <select
            id="userRole"
            name="userRole"
            value={settings.userRole}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="admin">Admin - Full access to all settings.</option>
            <option value="editor">Editor - Can modify content.</option>
            <option value="viewer">Viewer - Can view content only.</option>
          </select>
        </div>

        {/* Theme Selection */}
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Site Theme</label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
        </div>

        {/* Notification Preferences */}
        <div>
          <label htmlFor="notifications" className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleInputChange}
              className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Enable Notifications</span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
        >
          Save Settings
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 transition"
        >
          Reset to Default
        </button>
      </form>
    </div>
  );
}
