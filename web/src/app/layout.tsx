"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f8f7] lg:flex">

      {/* Sidebar / Mobile navigation */}
      <Sidebar />

      {/* Main application area */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">

        {/* Desktop topbar */}
        <Topbar />

        {/* Page content */}
        <main className="flex-1 min-w-0 overflow-x-hidden">

          <div className="w-full px-4 pb-8 pt-[88px] sm:px-6 lg:px-8 lg:pt-8">
            <div className="mx-auto w-full max-w-[1600px]">
              {children}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}