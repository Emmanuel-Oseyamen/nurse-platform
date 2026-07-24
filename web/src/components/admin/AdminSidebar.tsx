"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Stethoscope,
  HelpCircle,
  BookOpen,
  Tags,
  CalendarDays,
  Bell,
  BarChart3,
  Settings,
  LogOut,
  HeartPulse,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Nurses",
    href: "/admin/nurses",
    icon: Stethoscope,
  },
  {
    name: "Questions",
    href: "/admin/questions",
    icon: HelpCircle,
  },
  {
    name: "Health Tips",
    href: "/admin/health-tips",
    icon: BookOpen,
  },
  {
    name: "Specialties",
    href: "/admin/specialties",
    icon: Tags,
  },
  {
    name: "Consultations",
    href: "/admin/consultations",
    icon: CalendarDays,
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="px-8 py-8 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <HeartPulse className="text-emerald-400" size={34} />

          <div>

            <div className="font-bold text-xl">
              NurseQ&A
            </div>

            <div className="text-xs text-slate-400">
              Admin Portal
            </div>

          </div>

        </div>

      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-emerald-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}

      </nav>

      <div className="p-5 border-t border-slate-800">

        <button className="flex items-center gap-3 text-red-400 hover:text-red-300">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}