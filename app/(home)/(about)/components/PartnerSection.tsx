"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function PartnerSection() {
  const router = useRouter();

  const handleBecomePartnerClick = () => {
    router.push("/add-service-request"); // Redirect to the form page
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Become a Partner
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-6">
          Are you a service provider looking to expand your reach? Join our
          platform and connect with customers who need your expertise.
        </p>
        <div className="text-center">
          <Button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={handleBecomePartnerClick}
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
