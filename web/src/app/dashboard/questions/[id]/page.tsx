"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useParams } from "next/navigation";

export default function QuestionDetail() {
  const [question, setQuestion] = useState<any>(null);

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    loadQuestion();
  }, []);

  async function loadQuestion() {
    try {
      const res = await api.get(
        `/questions/${id}`
      );

      setQuestion(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">

      <div className="bg-white border rounded-xl p-6">

        <h1 className="text-3xl font-bold mb-3">
          {question.title}
        </h1>

        <p className="text-gray-600">
          {question.content}
        </p>

      </div>

      {question.answer && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">

          <h2 className="font-bold mb-3">
            Nurse Answer
          </h2>

          <p>
            {question.answer.content}
          </p>

        </div>
      )}

    </div>
  );
}