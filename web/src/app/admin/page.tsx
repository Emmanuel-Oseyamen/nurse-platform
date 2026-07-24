"use client";

import {
  Users,
  Stethoscope,
  HelpCircle,
  CalendarDays,
} from "lucide-react";

import StatCard from "@/components/admin/StatCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back. Here's today's platform overview.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Users"
          value="12,540"
          icon={Users}
        />

        <StatCard
          title="Verified Nurses"
          value="256"
          icon={Stethoscope}
        />

        <StatCard
          title="Questions"
          value="8,921"
          icon={HelpCircle}
        />

        <StatCard
          title="Consultations"
          value="642"
          icon={CalendarDays}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Latest Users
          </h2>

          <p className="text-gray-500">
            (We'll connect this to the API next.)
          </p>

        </div>

        <div className="bg-white border rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Questions
          </h2>

          <p className="text-gray-500">
            (Live questions will appear here.)
          </p>

        </div>

      </div>

    </div>
  );
}