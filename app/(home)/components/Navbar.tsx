"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Home, User } from "lucide-react"; // Import icons
import Link from "next/link"; // Next.js Link for navigation
import { ModeToggle } from "./ModeToggle"; // Import ModeToggle

export default function Navbar() {
  const router = useRouter();

  // Handle redirection for Login and Sign Up buttons
  const handleLoginClick = () => {
    router.push("/signin"); // Redirect to /signin page
  };

  const handleSignUpClick = () => {
    router.push("/signup"); // Redirect to /signup page
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm dark:bg-gray-800">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/SarvJagat_Logo_Final.png" // Correct path in the public folder
          alt="Service Marketplace Logo"
          className="w-10 h-10 mr-2" // Adjust width and height as needed
        />
      </div>

      {/* Navigation Menu (using Next.js Link) */}
      <div className="flex gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-900 dark:text-white"
        >
          <Home className="mr-2" /> Home
        </Link>
        <Link
          href="/services"
          className="flex items-center gap-2 text-gray-900 dark:text-white"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-2 text-gray-900 dark:text-white"
        >
          About
        </Link>
      </div>

      {/* Theme Toggle and Login & Sign-up Buttons */}
      <div className="flex gap-4 items-center">
        <ModeToggle /> {/* Theme toggle button */}
        <Button variant="outline" onClick={handleLoginClick}>
          <User className="mr-2" /> Login
        </Button>
        <Button variant="default" onClick={handleSignUpClick}>
          <User className="mr-2" /> Sign Up
        </Button>
      </div>
    </nav>
  );
}
