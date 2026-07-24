"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { Search } from "lucide-react";

interface Specialty {
  id: string;
  name: string;
  description?: string;
  _count: {
    nurses: number;
  };
}

export default function SpecialtiesPage() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSpecialties();
  }, []);

  async function loadSpecialties() {
    try {
      const res = await api.get("/specialties");
      setSpecialties(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const filtered = useMemo(() => {
    return specialties.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [specialties, search]);

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Browse Specialties
        </h1>

        <p className="text-gray-500 mt-2">
          Find experienced nurses by healthcare specialty.
        </p>

      </div>

      <div className="relative max-w-lg">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search specialties..."
          className="w-full border rounded-xl pl-11 pr-4 py-3"
        />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filtered.map((specialty) => (

          <div
            key={specialty.id}
            className="bg-white rounded-2xl border p-6 hover:shadow-lg transition"
          >

            <h2 className="text-xl font-semibold">
              {specialty.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {specialty.description ??
                "Professional healthcare specialists available for consultation."}
            </p>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-emerald-600 font-medium">
                {specialty._count.nurses} Nurses
              </span>

              <Link
                href={`/dashboard/nurses?specialty=${encodeURIComponent(
                  specialty.name
                )}`}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
              >
                Browse
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}