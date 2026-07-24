"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function MyQuestionsPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    try {
      const res = await api.get("/questions/mine");

      setQuestions(
        Array.isArray(res.data)
          ? res.data
          : res.data?.questions || []
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          My Questions
        </h1>

        <Link
          href="/dashboard/questions/ask"
          className="bg-green-600 text-white px-5 py-3 rounded-lg"
        >
          Ask Question
        </Link>
      </div>

      <div className="space-y-4">

        {questions.map((q) => (
          <Link
            key={q.id}
            href={`/dashboard/questions/${q.id}`}
            className="block bg-white border rounded-xl p-5 hover:shadow"
          >
            <div className="flex justify-between">

              <h2 className="font-semibold">
                {q.title}
              </h2>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  q.status === "ANSWERED"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {q.status}
              </span>

            </div>

            <p className="text-gray-500 mt-2">
              {q.content}
            </p>

            <div className="mt-3 text-sm text-gray-400">
              {q.visibility}
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}