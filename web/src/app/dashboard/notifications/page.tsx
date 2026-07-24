"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      const res = await api.get("/notifications");
      setNotifications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function markRead(id: string) {
    try {
      await api.patch(`/notifications/${id}/read`);

      setNotifications((prev) =>
        prev.map((n) =>
          n.id === id
            ? { ...n, read: true }
            : n
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Notifications
      </h1>

      {notifications.length === 0 ? (
        <div className="bg-white rounded-xl border p-10 text-center text-gray-500">
          No notifications yet.
        </div>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => markRead(notification.id)}
            className={`bg-white border rounded-xl p-5 cursor-pointer transition ${
              notification.read
                ? "opacity-70"
                : "border-green-500"
            }`}
          >
            <h2 className="font-semibold">
              {notification.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {notification.message}
            </p>

            <p className="text-xs text-gray-400 mt-4">
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}

    </div>
  );
}