// app/admin/page.tsx
export default function DashboardOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard Overview</h1>
      <p>Welcome to the admin dashboard. Use the sidebar to navigate through different sections.</p>

      {/* General Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-700">Active Services</h2>
          <p className="text-3xl font-bold">58</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-yellow-700">Pending Requests</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>John Doe updated his profile</span>
            <span className="text-gray-500 text-sm">5 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span>New service added: SEO Optimization</span>
            <span className="text-gray-500 text-sm">20 mins ago</span>
          </li>
          <li className="flex justify-between">
            <span>Jane Smith requested a refund</span>
            <span className="text-gray-500 text-sm">1 hour ago</span>
          </li>
        </ul>
      </div>

      {/* Key Performance Indicators */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium">Monthly Revenue</h3>
            <p className="text-2xl font-bold">$12,340</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">New Signups</h3>
            <p className="text-2xl font-bold">250</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resolved Requests</h3>
            <p className="text-2xl font-bold">45</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Pending Refunds</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
