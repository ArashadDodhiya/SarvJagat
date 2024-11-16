"use client";
import React from "react";
import { useParams } from "next/navigation";
import { services } from "@/data/servicesData";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";

const ApplyPage: React.FC = () => {
//   const router = useRouter();
  const params = useParams()
  const id  = params?.id;

  // Find the selected service based on the ID
  const service = services.find((service) => service.id === Number(id));

  if (!service) {
    return <div className="text-center">Service not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card className="shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            Apply for {service.name}
          </h2>
        </CardHeader>
        <CardContent>
          <p>{service.description}</p>
          <h3 className="font-semibold mt-4">Required Documents:</h3>
          <ul className="list-disc list-inside mt-2">
            {service.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          {/* You can add any other service details here if needed */}
        </CardContent>

        <form className="grid gap-4 p-6">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input placeholder="Enter your full name" className="w-full mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Email Address</label>
            <Input type="email" placeholder="Enter your email address" className="w-full mt-1" />
          </div>

          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ApplyPage;
