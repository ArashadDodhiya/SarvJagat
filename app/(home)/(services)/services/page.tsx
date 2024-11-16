"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // Search bar
import { Card } from "@/components/ui/card"; // Card for each service
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { services } from "@/data/servicesData";


// Mock data for services with added category field
// const services = [
//   { name: "Non-Creamy Layer Certificate", description: "Application and renewal services for OBC, SEBC, etc.", category: "Certification", id: 1 },
//   { name: "Caste Certificate", description: "Issuance of SC/ST, OBC, SEBC certificates.", category: "Certification", id: 2 },
//   { name: "Income Certificate", description: "For various government schemes and scholarships.", category: "Certification", id: 3 },
//   { name: "Domicile Certificate", description: "Proof of residence for educational or employment purposes.", category: "Certification", id: 4 },
//   { name: "Birth/Death Certificate", description: "Registration and issuance of birth and death certificates.", category: "Certification", id: 5 },
//   { name: "Marriage Certificate", description: "Registration of marriages and issuance of certificates.", category: "Legal", id: 6 },
//   { name: "Affidavit Services", description: "Drafting and notarization of affidavits for various purposes.", category: "Legal", id: 7 },
//   { name: "Rent Agreement Form Services", description: "Drafting and registration of rental agreements.", category: "Legal", id: 8 },
//   { name: "Power of Attorney", description: "Drafting and registration of power of attorney documents.", category: "Legal", id: 9 },
//   { name: "Aadhaar Services", description: "Enrollment, updates, and Aadhaar authentication services.", category: "Digital", id: 18 },
//   { name: "Digital Locker", description: "Secure storage of digital documents linked to Aadhaar.", category: "Digital", id: 17 },
//   { name: "Income Tax Filing", description: "Assistance with filing income tax returns.", category: "Finance", id: 28 },
//   { name: "PAN Card Services", description: "Application, correction, and reissue of PAN cards.", category: "Finance", id: 25 },
//   { name: "TDS/TCS Filing", description: "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) services.", category: "Finance", id: 26 },
//   { name: "GST Registration", description: "Registration for Goods and Services Tax (GST) for businesses.", category: "Finance", id: 27 },
//   { name: "Subsidy Application", description: "Application for various government subsidies.", category: "Scheme", id: 29 },
//   { name: "Pension Services", description: "Application and renewal of government pensions.", category: "Scheme", id: 30 },
//   { name: "Welfare Scheme Enrollment", description: "Enrollment in government welfare schemes (e.g., PM-Kisan, Ujjwala Yojana).", category: "Scheme", id: 31 },
//   { name: "Scholarship Application", description: "Assistance with applying for various government scholarships.", category: "Education", id: 32 },
//   { name: "Employment Exchange Registration", description: "Registration with employment exchanges for job seekers.", category: "Education", id: 33 },
//   { name: "Skill Development Programs", description: "Enrollment in government-sponsored skill development initiatives.", category: "Education", id: 34 },
//   { name: "Voter ID Registration", description: "Application and correction of Voter ID cards.", category: "Identity", id: 35 },
//   { name: "Passport Application", description: "Assistance with passport applications and renewals.", category: "Identity", id: 36 },
//   { name: "Driving License", description: "Application, renewal, and correction of driving licenses.", category: "Identity", id: 37 },
//   { name: "Water/Electricity Connection", description: "Application for new water or electricity connections.", category: "Utility", id: 38 },
//   { name: "Property Tax Payment", description: "Payment of municipal property taxes.", category: "Utility", id: 39 },
//   { name: "Municipal Services", description: "Application for various municipal services like sanitation, building permits, etc.", category: "Utility", id: 40 },
//   { name: "Ayushman Bharat Registration", description: "Enrollment in the Ayushman Bharat health scheme.", category: "Health", id: 41 },
//   { name: "Insurance Claim Assistance", description: "Filing and processing of insurance claims.", category: "Health", id: 42 },
//   { name: "Health Card Issuance", description: "Issuance of health cards for government health schemes.", category: "Health", id: 43 },
//   { name: "Tender Form Fill-Up", description: "Assistance with filling and submitting government tender forms.", category: "Procurement", id: 19 },
//   { name: "Bid Submission Services", description: "Guidance and support for submitting bids in government projects.", category: "Procurement", id: 20 },
//   { name: "GeM Registration", description: "Registration and participation in the Government e-Marketplace.", category: "Procurement", id: 21 },
// ];


export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Filter services based on the search term
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) // Include description in the search
  );

  // Navigate to service details
  const handleServiceClick = (id) => {
    router.push(`/services/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-8">
        <Input
          placeholder="Search for services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            className="p-4 flex flex-col items-center cursor-pointer"
            onClick={() => handleServiceClick(service.id)}
          >
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-sm font-medium text-gray-500 mt-2">Category: {service.category}</p>
            <Button variant="outline" className="mt-4">View Service</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}