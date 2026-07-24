"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ConsultationsPage() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const [consultations, setConsultations] =
    useState<any[]>([]);

  useEffect(() => {
    loadConsultations();
  }, []);

  async function loadConsultations() {
    const res = await api.get(
      "/consultations/mine"
    );

    setConsultations(res.data);
  }

  async function createConsultation() {
    await api.post("/consultations", {
      topic,
      description,
    });

    setTopic("");
    setDescription("");

    loadConsultations();
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Consultations
      </h1>

      <div className="bg-white border rounded-xl p-6 space-y-4">

        <input
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          placeholder="Topic"
          className="w-full border p-3 rounded"
        />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Describe your issue..."
          className="w-full border p-3 rounded"
        />

        <button
          onClick={createConsultation}
          className="bg-green-600 text-white px-5 py-3 rounded"
        >
          Request Consultation
        </button>

      </div>

      <div className="space-y-3">

        {consultations.map((c) => (
          <div
            key={c.id}
            className="bg-white border rounded-xl p-4"
          >
            <h3 className="font-semibold">
              {c.topic}
            </h3>

            <p>{c.description}</p>

            <span className="text-sm text-gray-500">
              {c.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}