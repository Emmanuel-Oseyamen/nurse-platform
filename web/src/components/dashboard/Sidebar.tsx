"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  PenSquare,
  MessageCircle,
  Users,
  Stethoscope,
  BookOpen,
  User,
  Settings,
  LogOut,
  Bell,
  ShieldCheck,
  ChevronRight,
  HeartPulse,
  PhoneCall,
  X,
} from "lucide-react";

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const menu = [
    {
      title: "MAIN",
      items: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Nurse Workspace",
          href: "/dashboard/nurse",
          icon: Stethoscope,
        },
        {
          label: "Notifications",
          href: "/dashboard/notifications",
          icon: Bell,
          badge: 3,
        },
      ],
    },
    {
      title: "ASK & CONNECT",
      items: [
        {
          label: "Ask a Question",
          href: "/dashboard/questions/ask",
          icon: PenSquare,
        },
        {
          label: "My Questions",
          href: "/dashboard/questions",
          icon: MessageCircle,
        },
        {
          label: "Consultations",
          href: "/dashboard/consultations",
          icon: Users,
        },
      ],
    },
    {
      title: "EXPLORE",
      items: [
        {
          label: "Nurses",
          href: "/dashboard/nurses",
          icon: Users,
        },
        {
          label: "Specialties",
          href: "/dashboard/specialties",
          icon: Stethoscope,
        },
        {
          label: "Health Topics",
          href: "/dashboard/health-topics",
          icon: BookOpen,
        },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        {
          label: "Profile",
          href: "/dashboard/profile",
          icon: User,
        },
        {
          label: "Settings",
          href: "/dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ];

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function isActive(href: string) {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  return (
    <>
      {/* ================================================= */}
      {/* MOBILE BACKDROP */}
      {/* ================================================= */}

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMobileMenu}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* ================================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================================= */}

      <aside
        className="
          sticky
          top-0
          hidden
          h-screen
          w-[280px]
          shrink-0
          flex-col
          overflow-hidden
          border-r
          border-slate-800
          bg-[#0B1220]
          text-white
          lg:flex
        "
      >
        <SidebarContent
          menu={menu}
          isActive={isActive}
          closeMobileMenu={closeMobileMenu}
          handleLogout={handleLogout}
        />
      </aside>

      {/* ================================================= */}
      {/* MOBILE SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[min(290px,85vw)]
          flex-col
          overflow-hidden
          border-r
          border-white/10
          bg-[#0B1220]
          text-white
          shadow-2xl
          transition-transform
          duration-300
          ease-out
          lg:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Mobile drawer header */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">

          <Link
            href="/dashboard"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-emerald-400
                to-teal-500
              "
            >
              <HeartPulse size={21} />
            </div>

            <div>

              <h1 className="text-xl font-bold tracking-tight">
                Nepox
              </h1>

              <p className="text-[9px] tracking-widest text-slate-500">
                HEALTHCARE
              </p>

            </div>

          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              text-slate-400
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto px-4 py-6">

          <Navigation
            menu={menu}
            isActive={isActive}
            closeMobileMenu={closeMobileMenu}
          />

        </div>

        {/* Emergency */}

        <div className="px-4 pb-4">
          <EmergencyCard />
        </div>

        {/* Account */}

        <div className="px-4 pb-5">
          <AccountFooter
            handleLogout={handleLogout}
          />
        </div>

      </aside>
    </>
  );
}

/* ===================================================== */
/* SHARED SIDEBAR CONTENT */
/* ===================================================== */

function SidebarContent({
  menu,
  isActive,
  closeMobileMenu,
  handleLogout,
}: {
  menu: any[];
  isActive: (href: string) => boolean;
  closeMobileMenu: () => void;
  handleLogout: () => void;
}) {
  return (
    <>

      {/* Brand */}

      <div className="border-b border-white/10 px-6 pb-6 pt-7">

        <Link
          href="/dashboard"
          className="group flex items-center gap-3"
        >

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-emerald-400
              to-teal-500
              shadow-lg
              shadow-emerald-500/20
              transition-transform
              group-hover:scale-105
            "
          >
            <HeartPulse
              size={23}
              strokeWidth={2.5}
            />
          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              Nepox
            </h1>

            <p className="mt-0.5 text-[11px] tracking-wide text-slate-400">
              HEALTHCARE PLATFORM
            </p>

          </div>

        </Link>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <Navigation
          menu={menu}
          isActive={isActive}
          closeMobileMenu={closeMobileMenu}
        />

      </div>

      {/* Emergency */}

      <div className="px-4 pb-4">
        <EmergencyCard />
      </div>

      {/* Account */}

      <div className="px-4 pb-5">
        <AccountFooter
          handleLogout={handleLogout}
        />
      </div>

    </>
  );
}

/* ===================================================== */
/* NAVIGATION */
/* ===================================================== */

function Navigation({
  menu,
  isActive,
  closeMobileMenu,
}: {
  menu: any[];
  isActive: (href: string) => boolean;
  closeMobileMenu: () => void;
}) {
  return (
    <>
      {menu.map((section) => (
        <div
          key={section.title}
          className="mb-7"
        >

          <div className="mb-2 px-3">
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
              {section.title}
            </h3>
          </div>

          <div className="space-y-1">

            {section.items.map((item: any) => {

              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    group
                    relative
                    flex
                    min-h-[52px]
                    items-center
                    justify-between
                    rounded-2xl
                    px-3.5
                    py-2.5
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/10 text-white"
                        : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                    }
                  `}
                >

                  {active && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-7
                        w-1
                        -translate-y-1/2
                        rounded-r-full
                        bg-emerald-400
                        shadow-lg
                        shadow-emerald-400/40
                      "
                    />
                  )}

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-all
                        ${
                          active
                            ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                            : "bg-white/[0.04] text-slate-500 group-hover:bg-white/[0.08] group-hover:text-slate-200"
                        }
                      `}
                    >
                      <Icon
                        size={17}
                        strokeWidth={active ? 2.3 : 2}
                      />
                    </div>

                    <span
                      className={`
                        text-sm font-medium
                        ${
                          active
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                  </div>

                  <div className="flex items-center">

                    {item.badge && (
                      <span
                        className="
                          flex
                          h-5
                          min-w-5
                          items-center
                          justify-center
                          rounded-full
                          bg-emerald-500
                          px-1.5
                          text-[10px]
                          font-bold
                          text-white
                        "
                      >
                        {item.badge}
                      </span>
                    )}

                    {active && !item.badge && (
                      <ChevronRight
                        size={15}
                        className="text-emerald-400"
                      />
                    )}

                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      ))}
    </>
  );
}

/* ===================================================== */
/* EMERGENCY CARD */
/* ===================================================== */

function EmergencyCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-emerald-500/20
        bg-gradient-to-br
        from-emerald-500/10
        to-teal-500/5
        p-4
      "
    >

      <div
        className="
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          bg-emerald-500/10
          blur-2xl
        "
      />

      <div className="relative">

        <div className="mb-3 flex items-center gap-2">

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-xl
              bg-emerald-500/15
            "
          >
            <ShieldCheck
              size={16}
              className="text-emerald-400"
            />
          </div>

          <span className="text-xs font-semibold text-emerald-300">
            Emergency Support
          </span>

        </div>

        <p className="text-[11px] leading-5 text-slate-400">
          For medical emergencies, contact emergency
          services immediately.
        </p>

        <div className="mt-4 flex items-center justify-between">

          <div>

            <div className="text-2xl font-bold text-white">
              112
            </div>

            <div className="text-[10px] text-slate-500">
              Emergency Services
            </div>

          </div>

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-emerald-500/10
            "
          >
            <PhoneCall
              size={16}
              className="text-emerald-400"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

/* ===================================================== */
/* ACCOUNT FOOTER */
/* ===================================================== */

function AccountFooter({
  handleLogout,
}: {
  handleLogout: () => void;
}) {
  return (
    <div className="border-t border-white/10 pt-4">

      <Link
        href="/dashboard/profile"
        className="
          group
          flex
          min-w-0
          items-center
          gap-3
          px-2
        "
      >

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-gradient-to-br
            from-slate-600
            to-slate-700
          "
        >
          <User
            size={18}
            className="text-slate-300"
          />
        </div>

        <div className="min-w-0">

          <p className="truncate text-sm font-semibold text-white">
            My Account
          </p>

          <p className="truncate text-[11px] text-slate-500">
            Manage your profile
          </p>

        </div>

      </Link>

      <button
        type="button"
        onClick={handleLogout}
        className="
          mt-4
          flex
          min-h-[46px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-white/10
          text-sm
          font-medium
          text-slate-400
          transition
          hover:border-red-400/30
          hover:bg-red-500/10
          hover:text-red-400
        "
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
}