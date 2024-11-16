import FeaturedServices from "./components/FeaturedServices";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ServiceCategories from "./components/ServiceCategories";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <FeaturedServices />
      <ServiceCategories />
    </div>
  );
}
