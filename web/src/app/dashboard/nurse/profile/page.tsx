"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Specialty {
  id: string;
  name: string;
}

export default function NurseProfilePage() {
  const [bio, setBio] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [consultationFee, setConsultationFee] = useState("");

  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSpecialties();
  }, []);

  async function loadSpecialties() {
    try {
      const res = await api.get("/specialties");
      setSpecialties(res.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  function toggleSpecialty(id: string) {
    if (selectedSpecialties.includes(id)) {
      setSelectedSpecialties(
        selectedSpecialties.filter((s) => s !== id)
      );
    } else {
      setSelectedSpecialties([
        ...selectedSpecialties,
        id,
      ]);
    }
  }

  async function saveProfile() {
    try {
      setLoading(true);

      await api.post("/nurses/profile", {
        bio,
        specialtyIds: selectedSpecialties,
        yearsExperience: yearsExperience
          ? Number(yearsExperience)
          : undefined,
        consultationFee: consultationFee
          ? Number(consultationFee)
          : undefined,
      });

      alert("Profile saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to save profile.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Nurse Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Complete your professional profile so patients can
          find and consult you.
        </p>
      </div>

      <div className="bg-white rounded-xl border p-8 space-y-6">

        {/* Bio */}

        <div>
          <label className="font-medium block mb-2">
            Professional Bio
          </label>

          <textarea
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Introduce yourself..."
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Experience */}

        <div>
          <label className="font-medium block mb-2">
            Years of Experience
          </label>

          <input
            type="number"
            value={yearsExperience}
            onChange={(e) =>
              setYearsExperience(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Fee */}

        <div>
          <label className="font-medium block mb-2">
            Consultation Fee (₦)
          </label>

          <input
            type="number"
            value={consultationFee}
            onChange={(e) =>
              setConsultationFee(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Specialties */}

        <div>
          <label className="font-medium block mb-4">
            Medical Specialties
          </label>

          <div className="grid md:grid-cols-2 gap-3">

            {specialties.map((specialty) => (
              <label
                key={specialty.id}
                className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={selectedSpecialties.includes(
                    specialty.id
                  )}
                  onChange={() =>
                    toggleSpecialty(specialty.id)
                  }
                />

                <span>{specialty.name}</span>
              </label>
            ))}

          </div>
        </div>

        <button
          disabled={loading}
          onClick={saveProfile}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>

      </div>

    </div>
  );
}