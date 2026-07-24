"use client";

import { use, useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [topic, setTopic] = useState<any>(null);

  useEffect(() => {
    loadTopic();
  }, [slug]);

  async function loadTopic() {
    try {
      const res = await api.get(`/health-topics/${slug}`);
      setTopic(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  if (!topic)
    return <div>Loading...</div>;

  return (
    <article className="max-w-4xl mx-auto space-y-8">

      {topic.image && (
        <img
          src={topic.image}
          className="rounded-xl w-full"
        />
      )}

      <div>

        <div className="text-emerald-600 font-semibold">
          {topic.category}
        </div>

        <h1 className="text-4xl font-bold mt-2">
          {topic.title}
        </h1>

      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: topic.content,
        }}
      />

    </article>
  );
}