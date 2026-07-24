"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FileText,
  UserCircle,
  MessageCircle,
  Heart,
  MessageSquare,
  PenLine,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

import { api } from "@/lib/api";

export default function NurseDashboardPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);

      const [questionsRes, contentRes] = await Promise.all([
        api.get("/questions"),
        api.get("/content/mine"),
      ]);

      const allQuestions = Array.isArray(questionsRes.data)
        ? questionsRes.data
        : questionsRes.data?.questions || [];

      const myContent = Array.isArray(contentRes.data)
        ? contentRes.data
        : contentRes.data?.content || [];

      setQuestions(
        allQuestions.filter(
          (question: any) => question.status === "PENDING"
        )
      );

      setContent(myContent);
    } catch (error) {
      console.error("Failed to load nurse dashboard:", error);
    } finally {
      setLoading(false);
    }
  }

  const totalLikes = content.reduce(
    (total, item) => total + (item.likes?.length || item._count?.likes || 0),
    0
  );

  const totalComments = content.reduce(
    (total, item) =>
      total + (item.comments?.length || item._count?.comments || 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Nurse Workspace
        </h1>

        <p className="text-slate-500 mt-2">
          Manage questions, publish health content, and keep your professional
          profile up to date.
        </p>
      </div>

      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Questions */}

        <Link
          href="/dashboard/nurse/questions"
          className="group bg-white border rounded-2xl p-6 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <MessageCircle size={24} className="text-blue-600" />
            </div>

            <ArrowRight
              size={20}
              className="text-slate-400 group-hover:text-blue-600 transition"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5">Answer Questions</h2>

          <p className="text-sm text-slate-500 mt-2">
            Review health questions from users and provide professional
            answers.
          </p>
        </Link>

        {/* Content */}

        <Link
          href="/dashboard/nurse/content"
          className="group bg-white border rounded-2xl p-6 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <FileText size={24} className="text-emerald-600" />
            </div>

            <ArrowRight
              size={20}
              className="text-slate-400 group-hover:text-emerald-600 transition"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5">
            My Health Content
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Create and manage health tips, articles, and educational content.
          </p>
        </Link>

        {/* Profile */}

        <Link
          href="/dashboard/nurse/profile"
          className="group bg-white border rounded-2xl p-6 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
              <UserCircle size={24} className="text-violet-600" />
            </div>

            <ArrowRight
              size={20}
              className="text-slate-400 group-hover:text-violet-600 transition"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5">
            My Professional Profile
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Manage your bio, specialties, experience, and professional details.
          </p>
        </Link>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-2xl p-5">
          <MessageCircle size={22} className="text-blue-600 mb-3" />

          <p className="text-3xl font-bold">
            {loading ? "—" : questions.length}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            Questions Waiting
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <FileText size={22} className="text-emerald-600 mb-3" />

          <p className="text-3xl font-bold">
            {loading ? "—" : content.length}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            My Content
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <Heart size={22} className="text-rose-500 mb-3" />

          <p className="text-3xl font-bold">
            {loading ? "—" : totalLikes}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            Total Likes
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5">
          <MessageSquare size={22} className="text-violet-600 mb-3" />

          <p className="text-3xl font-bold">
            {loading ? "—" : totalComments}
          </p>

          <p className="text-sm text-slate-500 mt-1">
            Total Comments
          </p>
        </div>
      </div>

      {/* =====================================================
          MAIN WORKSPACE
      ===================================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =================================================
            QUESTIONS
        ================================================= */}

        <div className="xl:col-span-2 bg-white border rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                Questions Waiting for You
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Help users by answering their health questions.
              </p>
            </div>

            <Link
              href="/dashboard/nurse/questions"
              className="text-emerald-600 text-sm font-medium"
            >
              View all
            </Link>
          </div>

          {loading ? (
            <div className="py-10 text-center text-slate-500">
              Loading questions...
            </div>
          ) : questions.length === 0 ? (
            <div className="border border-dashed rounded-2xl p-8 text-center">
              <CheckCircle
                size={32}
                className="mx-auto text-emerald-500 mb-3"
              />

              <h3 className="font-semibold">
                You're all caught up
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                There are no pending questions at the moment.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {questions.slice(0, 5).map((question: any) => (
                <Link
                  key={question.id}
                  href={`/dashboard/questions/${question.id}`}
                  className="block border rounded-xl p-4 hover:bg-slate-50 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium">
                        {question.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                        {question.content}
                      </p>
                    </div>

                    <Clock
                      size={18}
                      className="text-slate-400 flex-shrink-0"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* =================================================
            QUICK PUBLISH
        ================================================= */}

        <div className="bg-slate-900 text-white rounded-3xl p-6">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <PenLine size={24} />
          </div>

          <h2 className="text-xl font-semibold mt-6">
            Share Your Knowledge
          </h2>

          <p className="text-slate-300 text-sm mt-2">
            Create a health tip or educational article to help people make
            better health decisions.
          </p>

          <Link
            href="/dashboard/nurse/content"
            className="inline-flex items-center gap-2 mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            <PenLine size={18} />
            Write Health Content
          </Link>
        </div>
      </div>

      {/* =====================================================
          RECENT CONTENT
      ===================================================== */}

      <div className="bg-white border rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              My Recent Health Content
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your latest health tips and educational articles.
            </p>
          </div>

          <Link
            href="/dashboard/nurse/content"
            className="text-emerald-600 text-sm font-medium"
          >
            Manage content
          </Link>
        </div>

        {loading ? (
          <div className="py-8 text-center text-slate-500">
            Loading content...
          </div>
        ) : content.length === 0 ? (
          <div className="border border-dashed rounded-2xl p-8 text-center">
            <FileText
              size={32}
              className="mx-auto text-slate-400 mb-3"
            />

            <h3 className="font-semibold">
              You haven't published any content yet
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Share your knowledge with the NurseQ&amp;A community.
            </p>

            <Link
              href="/dashboard/nurse/content"
              className="inline-flex items-center gap-2 mt-5 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium"
            >
              <PenLine size={16} />
              Create your first health tip
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.slice(0, 3).map((item: any) => (
              <div
                key={item.id}
                className="border rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FileText size={14} />

                  <span>{item.type || "ARTICLE"}</span>
                </div>

                <h3 className="font-semibold mt-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Heart size={14} />
                    {item.likes?.length || item._count?.likes || 0}
                  </span>

                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} />
                    {item.comments?.length || item._count?.comments || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          PROFILE MANAGEMENT
      ===================================================== */}

      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Keep Your Professional Profile Updated
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              Make sure users can learn about your experience, specialties,
              and professional background.
            </p>
          </div>

          <Link
            href="/dashboard/nurse/profile"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            <UserCircle size={18} />
            Manage Profile
          </Link>
        </div>
      </div>
    </div>
  );
}