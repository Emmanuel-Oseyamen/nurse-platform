"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import {
Bell,
MessageSquare,
Search,
ChevronDown,
} from "lucide-react";

interface User {
firstName: string;
lastName: string;
role: string;
}

export default function Topbar() {
const [unreadCount, setUnreadCount] = useState(0);
const [user, setUser] = useState<User | null>(null);

useEffect(() => {
loadNotifications();
loadUser();
}, []);

async function loadNotifications() {
try {
const res = await api.get("/notifications");


  const notifications = Array.isArray(res.data)
    ? res.data
    : [];

  setUnreadCount(
    notifications.filter((n: any) => !n.read).length
  );
} catch (err) {
  console.error("Failed to load notifications:", err);
}


}

async function loadUser() {
try {
const res = await api.get("/users/me");
setUser(res.data);
} catch (err) {
console.error("Failed to load user:", err);
}
}

const fullName = `${user?.firstName ?? "User"} ${
    user?.lastName ?? ""
  }`.trim();

const roleLabel =
user?.role === "NURSE"
? "Nurse"
: user?.role === "ADMIN"
? "Administrator"
: "Patient";

return ( <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">


  <div className="flex h-[82px] items-center justify-between px-5 sm:px-8 lg:px-10">

    {/* ========================= */}
    {/* SEARCH */}
    {/* ========================= */}

    <div className="relative w-full max-w-[560px]">

      <Search
        size={19}
        strokeWidth={2}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search questions, nurses, health topics..."
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50/80
          pl-12
          pr-5
          text-sm
          text-slate-800
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200
          hover:border-slate-300
          focus:border-emerald-400
          focus:bg-white
          focus:ring-4
          focus:ring-emerald-500/10
        "
      />

    </div>


    {/* ========================= */}
    {/* RIGHT SIDE */}
    {/* ========================= */}

    <div className="ml-6 flex items-center gap-3 sm:gap-5">


      {/* ========================= */}
      {/* NOTIFICATIONS */}
      {/* ========================= */}

      <Link
        href="/dashboard/notifications"
        aria-label="Notifications"
        className="
          group
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white
          text-slate-600
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-emerald-200
          hover:bg-emerald-50
          hover:text-emerald-600
          hover:shadow-md
        "
      >

        <Bell
          size={20}
          strokeWidth={2}
          className="transition-transform group-hover:scale-105"
        />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-rose-500
              px-1
              text-[10px]
              font-bold
              text-white
            "
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}

      </Link>


      {/* ========================= */}
      {/* MESSAGES */}
      {/* ========================= */}

      <button
        aria-label="Messages"
        className="
          group
          hidden
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white
          text-slate-600
          shadow-sm
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-emerald-200
          hover:bg-emerald-50
          hover:text-emerald-600
          hover:shadow-md
          sm:flex
        "
      >

        <MessageSquare
          size={20}
          strokeWidth={2}
          className="transition-transform group-hover:scale-105"
        />

      </button>


      {/* DIVIDER */}

      <div className="hidden h-9 w-px bg-slate-200 sm:block" />


      {/* ========================= */}
      {/* USER PROFILE */}
      {/* ========================= */}

      <Link
        href="/dashboard/profile"
        className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          px-2
          py-1.5
          transition-all
          duration-200
          hover:bg-slate-50
        "
      >

        {/* Avatar */}

        <div className="relative">

          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              fullName
            )}&background=0f766e&color=fff&bold=true`}
            alt={fullName}
            className="
              h-11
              w-11
              rounded-full
              object-cover
              ring-2
              ring-white
              shadow-md
            "
          />

          {/* Online indicator */}

          <span
            className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
          />

        </div>


        {/* User details */}

        <div className="hidden min-w-0 sm:block">

          <div className="flex items-center gap-2">

            <p className="max-w-[140px] truncate text-sm font-semibold text-slate-900">
              {user?.firstName
                ? `Hello, ${user.firstName}`
                : "Hello, User"}
            </p>

            <ChevronDown
              size={14}
              className="
                text-slate-400
                transition-transform
                group-hover:translate-y-0.5
              "
            />

          </div>

          <div className="mt-0.5 flex items-center gap-2">

            <span
              className="
                rounded-full
                bg-emerald-50
                px-2
                py-0.5
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-emerald-700
              "
            >
              {roleLabel}
            </span>

          </div>

        </div>

      </Link>

    </div>

  </div>

</header>


);
}
