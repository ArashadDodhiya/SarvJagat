// app/dashboard/services/[id]/edit/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function EditServicePage() {
  // const router = useRouter();
  const params = useParams();
  const id = params?.id; // Get the service ID from the route
  const serviceId = parseInt(id as string); // Parse the ID as an integer

  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    // Fetch the service based on ID (simulating here with static data)
    const foundService = services.find((s) => s.id === serviceId);
    setService(foundService || null);
  }, [serviceId]);

  if (!service) {
    return <p>Service not found.</p>; // Handle case where service is not found
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Edit {service.title}</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            defaultValue={service.title}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            defaultValue={service.description}
            className="border rounded-md p-2 w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input
            type="number"
            defaultValue={service.price}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
