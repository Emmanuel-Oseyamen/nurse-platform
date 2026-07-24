"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function NurseQuestionsPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  async function loadQuestions() {
    try {
      setLoading(true);

      const res = await api.get("/questions");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.questions || [];

      setQuestions(data);
    } catch (err) {
      console.error("Failed to load questions:", err);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading questions...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Questions
        </h1>

        <p className="text-slate-500 mt-2">
          Review questions from users and provide professional answers.
        </p>
      </div>

      {/* Empty State */}

      {questions.length === 0 && (
        <div className="bg-white border rounded-3xl p-12 text-center">
          <div className="text-5xl mb-4">
            💬
          </div>

          <h2 className="text-2xl font-semibold">
            No Questions Available
          </h2>

          <p className="text-slate-500 mt-3">
            There are currently no questions waiting for an answer.
          </p>
        </div>
      )}

      {/* Questions */}

      <div className="space-y-5">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white border rounded-3xl p-6"
          >
            <div className="flex justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      question.status === "ANSWERED"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {question.status}
                  </span>

                  <span className="text-sm text-slate-400">
                    {question.visibility}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-slate-900">
                  {question.title}
                </h2>

                <p className="text-slate-600 mt-3">
                  {question.content}
                </p>

                <p className="text-sm text-slate-400 mt-4">
                  Asked{" "}
                  {question.createdAt
                    ? new Date(question.createdAt).toLocaleDateString()
                    : "Recently"}
                </p>
              </div>

              {question.status !== "ANSWERED" && (
                <button
                  onClick={() => {
                    window.location.href =
                      `/dashboard/nurse/questions/${question.id}`;
                  }}
                  className="self-start bg-emerald-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-emerald-700 transition"
                >
                  Answer
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}