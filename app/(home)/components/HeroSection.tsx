"use client";
import { Search } from "lucide-react";  // Import Search icon

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Find the Best Services</h1>
        <p className="text-lg text-gray-600 mb-6">
          From legal advice to home repairs, we connect you with the best service providers.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center text-lg font-medium hover:bg-blue-500">
          <Search className="mr-2" />
          Explore Services
        </button>
      </div>
    </section>
  );
}
