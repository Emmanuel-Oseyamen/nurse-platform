"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";

export default function NurseQuestionPage() {
  const params = useParams();
  const router = useRouter();

  const questionId = params.id as string;

  const [question, setQuestion] = useState<any>(null);
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (questionId) {
      loadQuestion();
    }
  }, [questionId]);

  async function loadQuestion() {
    try {
      setLoading(true);

      const res = await api.get(
        `/questions/${questionId}`
      );

      setQuestion(res.data);
    } catch (err) {
      console.error(
        "Failed to load question:",
        err
      );
    } finally {
      setLoading(false);
    }
  }

  async function submitAnswer() {
    if (!answer.trim()) {
      alert("Please write an answer first.");
      return;
    }

    try {
      setSubmitting(true);

      await api.post("/answers", {
        questionId,
        content: answer.trim(),
      });

      alert("Answer submitted successfully.");

      router.push(
        "/dashboard/nurse/questions"
      );
    } catch (err) {
      console.error(
        "Failed to submit answer:",
        err
      );

      alert(
        "Unable to submit answer. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <p className="text-slate-500">
          Loading question...
        </p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <div className="bg-white border rounded-3xl p-10">
          <div className="text-5xl mb-4">
            ❓
          </div>

          <h1 className="text-2xl font-bold">
            Question Not Found
          </h1>

          <p className="text-slate-500 mt-3">
            This question may have been removed
            or is no longer available.
          </p>

          <Link
            href="/dashboard/nurse/questions"
            className="inline-block mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl"
          >
            Back to Questions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back */}

      <Link
        href="/dashboard/nurse/questions"
        className="inline-flex items-center text-emerald-600 font-medium"
      >
        ← Back to Questions
      </Link>

      {/* Question */}

      <div className="bg-white border rounded-3xl p-8">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              question.status === "ANSWERED"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {question.status}
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
            {question.visibility}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          {question.title}
        </h1>

        <p className="text-slate-600 mt-5 leading-relaxed whitespace-pre-wrap">
          {question.content}
        </p>

        <div className="mt-6 pt-6 border-t text-sm text-slate-400">
          Asked{" "}
          {question.createdAt
            ? new Date(
                question.createdAt
              ).toLocaleString()
            : "Recently"}
        </div>
      </div>

      {/* Existing Answer */}

      {question.answer && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-emerald-900">
            Answer Already Submitted
          </h2>

          <p className="mt-4 text-slate-700 whitespace-pre-wrap">
            {question.answer.content}
          </p>

          <p className="text-sm text-slate-500 mt-5">
            Answered{" "}
            {question.answer.createdAt
              ? new Date(
                  question.answer.createdAt
                ).toLocaleString()
              : ""}
          </p>
        </div>
      )}

      {/* Answer Form */}

      {!question.answer &&
        question.status !== "ANSWERED" && (
          <div className="bg-white border rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">
              Provide Your Professional Answer
            </h2>

            <p className="text-slate-500 mt-2">
              Provide helpful health information
              and guidance. Avoid making a diagnosis
              or giving emergency medical instructions.
            </p>

            <textarea
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              placeholder="Write your professional response..."
              rows={8}
              className="w-full border border-slate-200 rounded-2xl p-4 mt-6 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex justify-end mt-5">
              <button
                onClick={submitAnswer}
                disabled={
                  submitting ||
                  !answer.trim()
                }
                className="bg-emerald-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Answer"}
              </button>
            </div>
          </div>
        )}
    </div>
  );
}