// app/components/ProviderNavbar.js

// import Link from 'next/link';

const ProviderNavbar = () => {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ProviderDashboard</div>
        {/* <div className="space-x-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/dashboard/services" className="text-gray-300 hover:text-white">
            My Services
          </Link>
          <Link href="/dashboard/requests" className="text-gray-300 hover:text-white">
            Service Requests
          </Link>
          <Link href="/dashboard/performance" className="text-gray-300 hover:text-white">
            Performance
          </Link>
          <Link href="/dashboard/payments" className="text-gray-300 hover:text-white">
            Payments
          </Link>
          <Link href="/dashboard/settings" className="text-gray-300 hover:text-white">
            Settings
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default ProviderNavbar;
