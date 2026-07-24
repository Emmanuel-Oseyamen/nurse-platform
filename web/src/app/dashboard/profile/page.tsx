"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const res = await api.get("/users/me");
    setUser(res.data);
  }

  if (!user) return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <div className="bg-white border rounded-xl p-6">

        <div className="space-y-4">

          <div>
            <p className="text-gray-500">First Name</p>
            <p>{user.firstName}</p>
          </div>

          <div>
            <p className="text-gray-500">Last Name</p>
            <p>{user.lastName}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>
            <p>{user.role}</p>
          </div>

        </div>

      </div>

    </div>
  );
}