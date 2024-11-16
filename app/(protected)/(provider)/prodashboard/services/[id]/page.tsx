// app/dashboard/services/[id]/page.tsx
"use client";

import { useRouter, useParams } from "next/navigation";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern web applications.",
    price: 500,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creating visually appealing graphics.",
    price: 300,
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    price: 400,
  },
];

export default function ServiceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id; // Get the service ID from the route
  const serviceId = parseInt(id as string); // Parse the ID as an integer

  // Find the service based on the ID
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <p>Service not found.</p>; // Handle case where service is not found
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">{service.title}</h1>
      <p className="mb-2">{service.description}</p>
      <p className="text-green-600 font-semibold">Price: ${service.price}</p>
      
      {/* Edit button to navigate to the edit page */}
      <button
        onClick={() => router.push(`/prodashboard/services/${serviceId}/edit`)} // Navigate to edit page
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Edit
      </button>
    </div>
  );
}
