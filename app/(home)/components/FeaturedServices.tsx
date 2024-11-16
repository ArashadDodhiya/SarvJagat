import { Briefcase, Wrench } from "lucide-react";  // Import service icons
import { ReactNode } from "react";
// import React from "react";

// Define a simple card component
function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-4 shadow-md bg-white rounded-lg ${className}`}>
      {children}
    </div>
  );
}

// Define the services
const services = [
  { name: "Legal Advice", rating: 4.5, description: "Get expert legal help.", icon: Briefcase },
  { name: "Home Repair", rating: 4.7, description: "Professional home repair services.", icon: Wrench },
  // Add more services as needed
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {services.map((service, idx) => (
          <Card key={idx} className="flex items-start gap-4">
            {/* Dynamic Icon */}
            <service.icon className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <div className="flex items-center mb-2">
                {/* Display rating stars */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < Math.floor(service.rating) ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">{service.rating}</span>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
