export function ContactSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">Have questions or want to learn more about our platform? Reach out to us!</p>
          <div>
            <p>Email: <a href="mailto:info@service-marketplace.com" className="text-blue-600">info@service-marketplace.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-blue-600">+123 456 789</a></p>
          </div>
        </div>
      </section>
    );
  }
  