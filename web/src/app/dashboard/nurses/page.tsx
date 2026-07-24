// web/src/app/dashboard/nurses/page.tsx

"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

import { useSearchParams } from "next/navigation";

export default function NursesPage() {
  const [nurses, setNurses] = useState<any[]>([]);

  useEffect(() => {
    loadNurses();
  }, []);

  const searchParams = useSearchParams();

  const specialty = searchParams.get("specialty");

  async function loadNurses() {
    try {
      const url = specialty
        ? `/nurses?specialty=${encodeURIComponent(specialty)}`
        : "/nurses";

      const res = await api.get(url);
      setNurses(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Nurses Directory
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {nurses.map((nurse) => (
          <div
            key={nurse.id}
            className="bg-white border rounded-xl p-5"
          >
            <h2 className="font-bold text-lg">
              {nurse.user?.firstName} {nurse.user?.lastName}
            </h2>

            <p className="text-gray-500 mt-2">
              {nurse.bio}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}