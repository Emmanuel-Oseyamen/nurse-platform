"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function FeedPage() {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    try {
      const res = await api.get("/questions");

      setQuestions(
        Array.isArray(res.data)
          ? res.data
          : res.data?.questions || []
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Public Questions
      </h1>

      <div className="space-y-4">

        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-white border rounded-xl p-5"
          >
            <h2 className="font-semibold">
              {q.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {q.content}
            </p>

            <div className="mt-3 text-sm">
              {q.status}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}