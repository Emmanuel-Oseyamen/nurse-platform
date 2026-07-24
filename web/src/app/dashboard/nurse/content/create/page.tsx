"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateHealthTipPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [featured, setFeatured] = useState(false);

  const [loading, setLoading] = useState(false);

  async function publish() {
    try {
      setLoading(true);

      await api.post("/content", {
        title,
        excerpt,
        content,
        type: "HEALTH_TIP",
        published: true,
        featured,
      });

      alert("Health tip published!");

      router.push("/dashboard/nurse/content");

    } catch (err) {
      console.error(err);
      alert("Failed to publish.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Create Health Tip
        </h1>

        <p className="text-gray-500 mt-2">
          Share trusted health knowledge with patients.
        </p>

      </div>

      <div className="bg-white rounded-3xl border p-8 space-y-6">

        <div>

          <label className="font-semibold">
            Title
          </label>

          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="e.g. 7 Ways to Stay Hydrated During Hot Weather"
            className="mt-2 w-full border rounded-xl p-4"
          />

        </div>

        <div>

          <label className="font-semibold">
            Short Summary
          </label>

          <textarea
            rows={3}
            value={excerpt}
            onChange={(e)=>setExcerpt(e.target.value)}
            placeholder="Brief description..."
            className="mt-2 w-full border rounded-xl p-4"
          />

        </div>

        <div>

          <label className="font-semibold">
            Health Tip
          </label>

          <textarea
            rows={16}
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder="Write your health tip..."
            className="mt-2 w-full border rounded-xl p-4"
          />

        </div>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={featured}
            onChange={(e)=>setFeatured(e.target.checked)}
          />

          Feature this on the homepage

        </label>

        <div className="flex justify-end gap-4">

          <button
            className="px-6 py-3 rounded-xl border"
            onClick={()=>router.back()}
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={publish}
            className="px-8 py-3 rounded-xl bg-emerald-600 text-white"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>

        </div>

      </div>

    </div>
  );
}