"use client";

import { useEffect, useState } from "react";

import { api } from "@/lib/api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const res = await api.get("/admin/users");

    setUsers(res.data);
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Users
      </h1>

      <div className="bg-white rounded-2xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Name
              </th>

              <th>Email</th>

              <th>Role</th>

              <th>Joined</th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {users.map((user: any) => (

              <tr
                key={user.id}
                className="border-t"
              >

                <td className="p-4">

                  {user.firstName}{" "}
                  {user.lastName}

                </td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>

                <td>

                  <button className="text-red-600">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}