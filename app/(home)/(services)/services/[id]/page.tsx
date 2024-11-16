"use client";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import {
//   Briefcase,
//   FileText,
//   Home,
//   CreditCard,
//   Tag,
//   Users,
//   Heart,
//   Hammer,
//   Award,
//   Wallet,
// } from "lucide-react";
import { services } from "@/data/servicesData";

// const serviceDetails = [
//   {
//     id: 1,
//     name: "Non-Creamy Layer Certificate",
//     description: "Application and renewal services for OBC, SEBC, etc.",
//     icon: Award,
//     category: "Certificates",
//   },
//   {
//     id: 2,
//     name: "Caste Certificate",
//     description: "Issuance of SC/ST, OBC, SEBC certificates.",
//     icon: Award,
//     category: "Certificates",
//   },
//   {
//     id: 3,
//     name: "Income Certificate",
//     description: "For various government schemes and scholarships.",
//     icon: FileText,
//     category: "Certificates",
//   },
//   {
//     id: 4,
//     name: "Domicile Certificate",
//     description: "Proof of residence for educational or employment purposes.",
//     icon: Home,
//     category: "Certificates",
//   },
//   {
//     id: 5,
//     name: "Birth/Death Certificate",
//     description: "Registration and issuance of birth and death certificates.",
//     icon: FileText,
//     category: "Certificates",
//   },
//   {
//     id: 6,
//     name: "Marriage Certificate",
//     description: "Registration of marriages and issuance of certificates.",
//     icon: Users,
//     category: "Certificates",
//   },
//   {
//     id: 7,
//     name: "Affidavit Services",
//     description:
//       "Drafting and notarization of affidavits for various purposes.",
//     icon: FileText,
//     category: "Legal Services",
//   },
//   {
//     id: 8,
//     name: "Rent Agreement Form Services",
//     description: "Drafting and registration of rental agreements.",
//     icon: Home,
//     category: "Legal Services",
//   },
//   {
//     id: 9,
//     name: "Power of Attorney",
//     description: "Drafting and registration of power of attorney documents.",
//     icon: Briefcase,
//     category: "Legal Services",
//   },
//   {
//     id: 18,
//     name: "Aadhaar Services",
//     description: "Enrollment, updates, and Aadhaar authentication services.",
//     icon: CreditCard,
//     category: "Identity Services",
//   },
//   {
//     id: 17,
//     name: "Digital Locker",
//     description: "Secure storage of digital documents linked to Aadhaar.",
//     icon: FileText,
//     category: "Identity Services",
//   },
//   {
//     id: 28,
//     name: "Income Tax Filing",
//     description: "Assistance with filing income tax returns.",
//     icon: Wallet,
//     category: "Financial Services",
//   },
//   {
//     id: 25,
//     name: "PAN Card Services",
//     description: "Application, correction, and reissue of PAN cards.",
//     icon: CreditCard,
//     category: "Identity Services",
//   },
//   {
//     id: 26,
//     name: "TDS/TCS Filing",
//     description:
//       "Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) services.",
//     icon: Tag,
//     category: "Financial Services",
//   },
//   {
//     id: 27,
//     name: "GST Registration",
//     description:
//       "Registration for Goods and Services Tax (GST) for businesses.",
//     icon: Tag,
//     category: "Financial Services",
//   },
//   {
//     id: 29,
//     name: "Subsidy Application",
//     description: "Application for various government subsidies.",
//     icon: Hammer,
//     category: "Financial Services",
//   },
//   {
//     id: 30,
//     name: "Pension Services",
//     description: "Application and renewal of government pensions.",
//     icon: FileText,
//     category: "Financial Services",
//   },
//   {
//     id: 31,
//     name: "Welfare Scheme Enrollment",
//     description:
//       "Enrollment in government welfare schemes (e.g., PM-Kisan, Ujjwala Yojana).",
//     icon: Heart,
//     category: "Welfare Services",
//   },
//   {
//     id: 32,
//     name: "Scholarship Application",
//     description:
//       "Assistance with applying for various government scholarships.",
//     icon: FileText,
//     category: "Welfare Services",
//   },
//   {
//     id: 33,
//     name: "Employment Exchange Registration",
//     description: "Registration with employment exchanges for job seekers.",
//     icon: Users,
//     category: "Employment Services",
//   },
//   {
//     id: 34,
//     name: "Skill Development Programs",
//     description:
//       "Enrollment in government-sponsored skill development initiatives.",
//     icon: Users,
//     category: "Employment Services",
//   },
//   {
//     id: 35,
//     name: "Voter ID Registration",
//     description: "Application and correction of Voter ID cards.",
//     icon: CreditCard,
//     category: "Identity Services",
//   },
//   {
//     id: 36,
//     name: "Passport Application",
//     description: "Assistance with passport applications and renewals.",
//     icon: Briefcase,
//     category: "Identity Services",
//   },
//   {
//     id: 37,
//     name: "Driving License",
//     description: "Application, renewal, and correction of driving licenses.",
//     icon: Home,
//     category: "Identity Services",
//   },
//   {
//     id: 38,
//     name: "Water/Electricity Connection",
//     description: "Application for new water or electricity connections.",
//     icon: Home,
//     category: "Utility Services",
//   },
//   {
//     id: 39,
//     name: "Property Tax Payment",
//     description: "Payment of municipal property taxes.",
//     icon: Hammer,
//     category: "Utility Services",
//   },
//   {
//     id: 40,
//     name: "Municipal Services",
//     description:
//       "Application for various municipal services like sanitation, building permits, etc.",
//     icon: Home,
//     category: "Utility Services",
//   },
//   {
//     id: 41,
//     name: "Ayushman Bharat Registration",
//     description: "Enrollment in the Ayushman Bharat health scheme.",
//     icon: Heart,
//     category: "Welfare Services",
//   },
//   {
//     id: 42,
//     name: "Insurance Claim Assistance",
//     description: "Filing and processing of insurance claims.",
//     icon: Briefcase,
//     category: "Financial Services",
//   },
//   {
//     id: 43,
//     name: "Health Card Issuance",
//     description: "Issuance of health cards for government health schemes.",
//     icon: Heart,
//     category: "Welfare Services",
//   },
//   {
//     id: 19,
//     name: "Tender Form Fill-Up",
//     description:
//       "Assistance with filling and submitting government tender forms.",
//     icon: Hammer,
//     category: "Tender Services",
//   },
//   {
//     id: 20,
//     name: "Bid Submission Services",
//     description:
//       "Guidance and support for submitting bids in government projects.",
//     icon: Hammer,
//     category: "Tender Services",
//   },
//   {
//     id: 21,
//     name: "GeM Registration",
//     description:
//       "Registration and participation in the Government e-Marketplace.",
//     icon: Briefcase,
//     category: "Tender Services",
//   },
// ];

export default function ServiceDetailsPage() {
  const params = useParams(); // Get service ID from URL
  const router = useRouter();
  const serviceId = Number(params?.id); // Convert to a number

  // Find the selected service using the serviceId
  const service = services.find((service) => service.id === serviceId);

  if (!service) {
    return <p>Service not found.</p>; // Handle case when service is not found
  }

  // Apply for service handler
  const handleApply = () => {
    router.push(`/services/${service.id}/apply`);
  };

  // const handleViewDetails = () => {
  //   router.push(`/`)
  // }

  // Find related services
  const relatedServices = services.filter(
    (s) => s.category === service.category && s.id !== service.id
  );

  // const IconComponent = service.icon; // Get the icon component

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        {/* <IconComponent className="w-16 h-16 mb-4 text-primary" />{" "} */}
        {/* Render the icon component */}
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
        <Button variant="default" size="lg" onClick={handleApply}>
          Apply for Service
        </Button>
      </div>

      {/* Related Services Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedServices.map((relatedService) => (
            <div
              key={relatedService.id}
              className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              {/* <relatedService.icon className="w-12 h-12 mb-2 text-primary" /> */}
              <h3 className="text-xl font-semibold">{relatedService.name}</h3>
              <p className="text-gray-600">{relatedService.description}</p>
              <Button variant="outline" className="mt-2" >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
