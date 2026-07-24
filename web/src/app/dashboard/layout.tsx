"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-slate-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Navigation */}
        <Topbar />

        {/* Main Page */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}