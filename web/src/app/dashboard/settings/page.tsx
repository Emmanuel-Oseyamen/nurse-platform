"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Settings
      </h1>

      <div className="bg-white border rounded-xl p-6">

        <button
          onClick={logout}
          className="bg-red-600 text-white px-5 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}