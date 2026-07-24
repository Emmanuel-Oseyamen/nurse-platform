"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { api } from "@/lib/api";

export default function AnswerForm() {
  const params = useSearchParams();

  const questionId = params.get("id");

  const [content, setContent] = useState("");

  async function submitAnswer() {
    await api.post("/answers", {
      questionId,
      content,
    });

    alert("Answer submitted");
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">
        Submit Answer
      </h1>

      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded-lg p-4"
      />

      <button
        onClick={submitAnswer}
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}