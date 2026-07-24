"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function HealthTopicsPage() {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    loadTopics();
  }, []);

  async function loadTopics() {
    try {
      const res = await api.get("/health-topics");
      setTopics(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Health Topics
        </h1>

        <p className="text-gray-500 mt-2">
          Learn from verified medical information written by healthcare professionals.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {topics.map((topic) => (

          <Link
            key={topic.id}
            href={`/dashboard/health-topics/${topic.slug}`}
            className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden"
          >

            {topic.image && (

              <img
                src={topic.image}
                className="h-48 w-full object-cover"
              />

            )}

            <div className="p-5">

              <span className="text-xs text-emerald-600 font-semibold uppercase">
                {topic.category}
              </span>

              <h2 className="font-bold text-xl mt-2">
                {topic.title}
              </h2>

              <p className="text-gray-500 mt-3">
                {topic.summary}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}