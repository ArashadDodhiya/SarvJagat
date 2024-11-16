import { Briefcase, Hammer, User } from "lucide-react";  // Icons for categories

const categories = [
  { name: "Legal", icon: Briefcase },
  { name: "Consulting", icon: User },
  { name: "Home Repair", icon: Hammer },
];

export default function ServiceCategories() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">Browse by Category</h2>
      
      {/* Grid layout for the categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center container mx-auto">
        {categories.map((category, idx) => (
          <button 
            key={idx} 
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <category.icon className="w-6 h-6" />  {/* Category Icon */}
            <span className="text-lg font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
