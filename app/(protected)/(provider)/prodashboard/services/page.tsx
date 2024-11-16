"use client"

// app/dashboard/services.tsx (Updated)
import { useEffect, useState } from "react";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services (replace this with your actual data fetching logic)
  useEffect(() => {
    const fetchServices = async () => {
      // Example static data. Replace this with an API call if needed.
      const response = [
        { id: 1, title: "Web Development", description: "Building modern web applications.", price: 500 },
        { id: 2, title: "Graphic Design", description: "Creating visually appealing graphics.", price: 300 },
        { id: 3, title: "SEO Optimization", description: "Improving website visibility on search engines.", price: 400 },
      ];
      setServices(response);
    };

    fetchServices();
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">My Services</h1>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.id} className="border p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p>{service.description}</p>
              <p className="text-green-600 font-semibold">Price: ${service.price}</p>
              <Link href={`/prodashboard/services/${service.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
