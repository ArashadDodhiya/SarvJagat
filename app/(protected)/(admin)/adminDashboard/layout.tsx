// app/admin/layout.tsx
"use client";

import { ReactNode } from "react"; // Importing ReactNode for type annotation
import AdminSidebar from "./components/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode; // Explicitly typing the children prop
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with independent scroll */}
      <div className="w-64 min-h-screen overflow-y-auto">
        <AdminSidebar />
      </div>
      
      {/* Main content with independent scroll */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
