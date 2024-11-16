const features = [
    { title: "Trusted Providers", description: "We vet all our service providers to ensure quality." },
    { title: "Easy-to-Use", description: "Our platform is user-friendly and easy to navigate." },
    { title: "Secure Payments", description: "We offer secure payment options for all transactions." },
  ];
  
  export function FeaturesSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  