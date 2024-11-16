import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";  // Import Search icon

export default function SearchBar() {
  return (
    <div className="flex justify-center py-8">
      <div className="relative w-full max-w-lg">
        <Input placeholder="Search for a service..." className="pl-10" />
        <Search className="absolute left-3 top-2.5" />  {/* Search Icon */}
      </div>
      <Button variant="default" className="ml-4">
        <Search className="mr-2" /> Search
      </Button>
    </div>
  );
}
