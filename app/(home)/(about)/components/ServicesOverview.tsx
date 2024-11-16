const services = [
    { name: "Legal Services", description: "Get expert legal advice from top professionals." },
    { name: "Home Repair", description: "Find skilled workers for all types of home repairs." },
    { name: "Consulting", description: "Business and personal consulting services available." },
  ];
  
  export function ServicesOverview() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  