"use client";

import {
  Search,
  Bell,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="bg-white border-b px-8 py-5 flex items-center justify-between">

      <div className="relative w-[450px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search users, nurses, questions..."
          className="w-full rounded-xl border pl-11 pr-4 py-3"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell />

          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            5
          </span>

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100?img=12"
            className="w-11 h-11 rounded-full"
          />

          <div>

            <div className="font-semibold">
              Administrator
            </div>

            <div className="text-xs text-gray-500">
              Super Admin
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}