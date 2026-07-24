"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function NewHealthTipPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const [featured, setFeatured] = useState(false);

  const [published, setPublished] = useState(true);

  const [loading, setLoading] = useState(false);

  async function publish() {
    try {
      setLoading(true);

      await api.post("/content", {
        title,
        excerpt,
        content,
        coverImage,
        featured,
        published,
        type: "HEALTH_TIP",
      });

      alert("Health Tip Published!");

      router.push("/dashboard/nurse/content");
    } catch (err) {
      console.error(err);
      alert("Unable to publish");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Write Today's Health Tip
        </h1>

        <p className="text-slate-500 mt-2">
          Educate thousands of patients with one post.
        </p>

      </div>

      <div className="bg-white rounded-3xl border p-8 space-y-6">

        <div>

          <label className="font-medium">
            Title
          </label>

          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full border rounded-xl p-4 mt-2"
            placeholder="Example: 7 Ways To Prevent Malaria"
          />

        </div>

        <div>

          <label className="font-medium">
            Short Summary
          </label>

          <textarea
            value={excerpt}
            onChange={(e)=>setExcerpt(e.target.value)}
            rows={3}
            className="w-full border rounded-xl p-4 mt-2"
            placeholder="One sentence patients see before opening..."
          />

        </div>

        <div>

          <label className="font-medium">
            Cover Image URL
          </label>

          <input
            value={coverImage}
            onChange={(e)=>setCoverImage(e.target.value)}
            className="w-full border rounded-xl p-4 mt-2"
            placeholder="https://..."
          />

        </div>

        <div>

          <label className="font-medium">
            Health Tip
          </label>

          <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            rows={15}
            className="w-full border rounded-xl p-4 mt-2"
            placeholder="Write your health article..."
          />

        </div>

        <div className="flex gap-8">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={featured}
              onChange={(e)=>setFeatured(e.target.checked)}
            />

            Featured

          </label>

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={published}
              onChange={(e)=>setPublished(e.target.checked)}
            />

            Publish Immediately

          </label>

        </div>

        <button
          onClick={publish}
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-4 font-semibold"
        >
          {loading ? "Publishing..." : "Publish Health Tip"}
        </button>

      </div>

    </div>
  );
}