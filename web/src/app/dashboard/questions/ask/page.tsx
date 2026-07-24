"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

export default function AskQuestionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Visibility is determined by which button the user clicked
  const visibility =
    searchParams.get("visibility") === "PRIVATE"
      ? "PRIVATE"
      : "PUBLIC";

  const isPrivate = visibility === "PRIVATE";

  async function submitQuestion() {
    if (!title.trim() || !content.trim()) {
      alert("Please enter a title and describe your concern.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/questions", {
        title: title.trim(),
        content: content.trim(),
        visibility,
      });

      alert("Question submitted successfully!");

      router.push("/dashboard/questions");
    } catch (err) {
      console.error(err);
      alert("Failed to submit question.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl">
      {/* Page Header */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          {isPrivate
            ? "Ask a Private Question"
            : "Ask a Public Question"}
        </h1>

        <p className="text-slate-500 mt-2">
          {isPrivate
            ? "Your question will be visible only to you and the nurse who answers it."
            : "Your question will be visible to the public and can be answered by available nurses."}
        </p>
      </div>

      {/* Question Form */}

      <div className="bg-white rounded-2xl border p-6 space-y-5">
        {/* Visibility Indicator */}

        <div
          className={`rounded-xl p-4 border ${
            isPrivate
              ? "bg-violet-50 border-violet-200"
              : "bg-emerald-50 border-emerald-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              {isPrivate ? "🔒" : "🌍"}
            </div>

            <div>
              <p
                className={`font-semibold ${
                  isPrivate
                    ? "text-violet-800"
                    : "text-emerald-800"
                }`}
              >
                {isPrivate
                  ? "Private Question"
                  : "Public Question"}
              </p>

              <p className="text-sm text-slate-600 mt-1">
                {isPrivate
                  ? "Only you and the responding nurse can view this question."
                  : "Other users may see this question and its answers."}
              </p>
            </div>
          </div>
        </div>

        {/* Title */}

        <div>
          <label className="block font-medium mb-2">
            Question Title
          </label>

          <input
            placeholder="e.g. What could be causing my persistent headache?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Content */}

        <div>
          <label className="block font-medium mb-2">
            Describe Your Concern
          </label>

          <textarea
            rows={7}
            placeholder="Please describe your symptoms, concerns, or questions in as much detail as possible..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
        </div>

        {/* Submit */}

        <button
          onClick={submitQuestion}
          disabled={loading}
          className={`w-full text-white px-6 py-3 rounded-xl font-medium transition ${
            loading
              ? "bg-slate-400 cursor-not-allowed"
              : isPrivate
              ? "bg-violet-600 hover:bg-violet-700"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {loading
            ? "Submitting..."
            : isPrivate
            ? "Submit Private Question"
            : "Submit Public Question"}
        </button>
      </div>
    </div>
  );
}