"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

interface TopbarProps {
  onOpenMenu: () => void;
}

export default function Topbar({
  onOpenMenu,
}: TopbarProps) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

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

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-slate-200/80
        bg-white/95
        backdrop-blur-xl
      "
    >

      {/* ================================================= */}
      {/* MOBILE HEADER */}
      {/* ================================================= */}

      <div className="lg:hidden">

        <div className="flex h-[68px] items-center justify-between px-4">

          {/* Left */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={onOpenMenu}
              aria-label="Open navigation"
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#0B1220]
                text-white
                shadow-sm
                transition
                active:scale-95
              "
            >
              <Menu size={21} />
            </button>

            <Link
              href="/dashboard"
              className="flex items-center gap-2.5"
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-teal-600
                  text-white
                  shadow-sm
                "
              >
                <span className="text-sm font-bold">
                  N
                </span>
              </div>

              <div className="leading-none">

                <p className="text-lg font-bold tracking-tight text-slate-900">
                  Nepox
                </p>

                <p className="mt-1 text-[8px] font-semibold tracking-[0.18em] text-slate-400">
                  HEALTHCARE
                </p>

              </div>

            </Link>

          </div>

          {/* Right */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() =>
                setMobileSearchOpen((value) => !value)
              }
              aria-label={
                mobileSearchOpen
                  ? "Close search"
                  : "Search"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition
                active:scale-95
              "
            >
              {mobileSearchOpen ? (
                <X size={19} />
              ) : (
                <Search size={19} />
              )}
            </button>

            <Link
              href="/dashboard/notifications"
              aria-label="Notifications"
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition
                active:scale-95
              "
            >

              <Bell size={19} />

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
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}

            </Link>

          </div>

        </div>

        {/* Mobile Search */}
        {mobileSearchOpen && (
          <div className="border-t border-slate-100 px-4 pb-3 pt-2">

            <div className="relative">

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                autoFocus
                type="text"
                placeholder="Search nurses, questions, topics..."
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-11
                  pr-4
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  focus:border-emerald-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-emerald-500/10
                "
              />

            </div>

          </div>
        )}

      </div>

      {/* ================================================= */}
      {/* DESKTOP HEADER */}
      {/* ================================================= */}

      <div className="hidden h-[82px] items-center justify-between px-8 lg:flex xl:px-10">

        {/* Search */}
        <div className="relative w-full max-w-[560px]">

          <Search
            size={19}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
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
              transition
              hover:border-slate-300
              focus:border-emerald-400
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-500/10
            "
          />

        </div>

        {/* Right side */}
        <div className="ml-6 flex items-center gap-4">

          <Link
            href="/dashboard/notifications"
            aria-label="Notifications"
            className="
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
              transition
              hover:-translate-y-0.5
              hover:border-emerald-200
              hover:bg-emerald-50
              hover:text-emerald-600
              hover:shadow-md
            "
          >

            <Bell size={20} />

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

          <div className="h-9 w-px bg-slate-200" />

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
              transition
              hover:bg-slate-50
            "
          >

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

            <div className="min-w-0">

              <div className="flex items-center gap-2">

                <p className="max-w-[140px] truncate text-sm font-semibold text-slate-900">
                  {user?.firstName
                    ? `Hello, ${user.firstName}`
                    : "Hello, User"}
                </p>

                <ChevronDown
                  size={14}
                  className="text-slate-400"
                />

              </div>

              <span
                className="
                  mt-0.5
                  inline-flex
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

          </Link>

        </div>

      </div>

    </header>
  );
}