"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function NurseContentPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    try {
      const res = await api.get("/content/mine");
      setArticles(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteArticle(id: string) {
    if (!confirm("Delete this article?")) return;

    try {
      await api.delete(`/content/${id}`);
      loadArticles();
    } catch (err) {
      console.error(err);
      alert("Unable to delete article.");
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading articles...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            My Health Tips
          </h1>

          <p className="text-gray-500 mt-2">
            Manage everything you've published.
          </p>

        </div>

        <Link
          href="/dashboard/nurse/content/create"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
        >
          + New Health Tip
        </Link>

      </div>

      {articles.length === 0 && (

        <div className="bg-white rounded-3xl border p-12 text-center">

          <h2 className="text-2xl font-semibold">
            No Health Tips Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Publish your first health tip.
          </p>

        </div>

      )}

      <div className="space-y-5">

        {articles.map((article) => (

          <div
            key={article.id}
            className="bg-white border rounded-3xl p-6 flex justify-between"
          >

            <div>

              <h2 className="text-2xl font-semibold">
                {article.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {article.excerpt}
              </p>

              <div className="mt-4 flex gap-6 text-sm text-gray-500">

                <span>
                  👁 {article.views}
                </span>

                <span>
                  ❤️ {article.likes?.length || 0}
                </span>

                <span>
                  💬 {article.comments?.length || 0}
                </span>

                <span>
                  🔖 {article.bookmarks?.length || 0}
                </span>

              </div>

            </div>

            <div className="flex gap-3">

              <Link
                href={`/dashboard/nurse/content/${article.id}/edit`}
                className="border px-5 py-2 rounded-xl"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteArticle(article.id)}
                className="bg-red-500 text-white px-5 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}