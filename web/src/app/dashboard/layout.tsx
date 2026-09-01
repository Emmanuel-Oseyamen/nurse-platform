"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f6f8f7]">

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* ================================================= */}
      {/* MAIN APPLICATION */}
      {/* ================================================= */}

      <div className="flex min-w-0 flex-1 flex-col">

        {/* Topbar / Mobile Header */}
        <Topbar
          onOpenMenu={() => setMobileOpen(true)}
        />

        {/* ================================================= */}
        {/* PAGE CONTENT */}
        {/* ================================================= */}

        <main className="min-w-0 flex-1 overflow-y-auto">

          <div
            className="
              mx-auto
              w-full
              max-w-[1600px]
              px-4
              py-4
              sm:px-6
              sm:py-6
              lg:px-8
              lg:py-8
            "
          >
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}