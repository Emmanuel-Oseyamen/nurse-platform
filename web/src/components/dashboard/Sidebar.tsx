"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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
Menu,
X,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
      // Remove authentication token
      localStorage.removeItem("token");

    // Redirect to login page
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
{/* MOBILE TOP BAR */}
{/* ================================================= */}


  <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-[72px] bg-[#0B1220] border-b border-white/10">

    <div className="h-full px-4 flex items-center justify-between">

      <Link
        href="/dashboard"
        onClick={closeMobileMenu}
        className="flex items-center gap-3"
      >

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">

          <HeartPulse
            size={21}
            strokeWidth={2.5}
          />

        </div>

        <div>

          <h1 className="text-xl font-bold tracking-tight text-white">
            Nepox
          </h1>

          <p className="text-[9px] text-slate-500 tracking-widest">
            HEALTHCARE
          </p>

        </div>

      </Link>


      {/* Mobile menu button */}

      <button
        type="button"
        onClick={() =>
          setMobileOpen(true)
        }
        className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08] transition"
        aria-label="Open navigation"
      >

        <Menu size={22} />

      </button>

    </div>

  </header>


  {/* ================================================= */}
  {/* MOBILE BACKDROP */}
  {/* ================================================= */}

  {mobileOpen && (

    <button
      type="button"
      aria-label="Close navigation"
      onClick={closeMobileMenu}
      className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    />

  )}


  {/* ================================================= */}
  {/* DESKTOP SIDEBAR */}
  {/* ================================================= */}

  <aside className="hidden lg:flex w-[280px] h-screen sticky top-0 flex-col overflow-hidden bg-[#0B1220] text-white border-r border-slate-800">

    <SidebarContent
      pathname={pathname}
      menu={menu}
      isActive={isActive}
      closeMobileMenu={closeMobileMenu}
    />

  </aside>


  {/* ================================================= */}
  {/* MOBILE SIDEBAR */}
  {/* ================================================= */}

  <aside
    className={`
      lg:hidden
      fixed
      top-0
      left-0
      z-50
      w-[290px]
      h-screen
      flex
      flex-col
      overflow-hidden
      bg-[#0B1220]
      text-white
      border-r
      border-white/10
      shadow-2xl
      transition-transform
      duration-300
      ease-out
      ${
        mobileOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }
    `}
  >

    {/* Mobile sidebar header */}

    <div className="px-5 py-5 border-b border-white/10 flex items-center justify-between">

      <Link
        href="/dashboard"
        onClick={closeMobileMenu}
        className="flex items-center gap-3"
      >

        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">

          <HeartPulse size={21} />

        </div>

        <div>

          <h1 className="text-xl font-bold">
            Nepox
          </h1>

          <p className="text-[9px] text-slate-500 tracking-widest">
            HEALTHCARE
          </p>

        </div>

      </Link>


      <button
        type="button"
        onClick={closeMobileMenu}
        className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition"
        aria-label="Close navigation"
      >

        <X size={20} />

      </button>

    </div>


    {/* Mobile navigation */}

    <div className="flex-1 overflow-y-auto px-4 py-6">

      <Navigation
        pathname={pathname}
        menu={menu}
        isActive={isActive}
        closeMobileMenu={closeMobileMenu}
      />

    </div>


    {/* Emergency */}

    <div className="px-4 pb-4">

      <EmergencyCard />

    </div>


    {/* Mobile account */}

    <div className="px-4 pb-5">

      <AccountFooter handleLogout={handleLogout} />

    </div>

  </aside>

</>


);
}

/* ===================================================== */
/* SHARED SIDEBAR CONTENT */
/* ===================================================== */

function SidebarContent({
pathname,
menu,
isActive,
closeMobileMenu,
handleLogout,
}: any) {
return (
<>


  {/* Brand */}

  <div className="px-6 pt-7 pb-6 border-b border-white/10">

    <Link
      href="/dashboard"
      className="flex items-center gap-3 group"
    >

      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">

        <HeartPulse
          size={23}
          strokeWidth={2.5}
        />

      </div>

      <div>

        <h1 className="text-2xl font-bold tracking-tight">
          Nepox
        </h1>

        <p className="text-[11px] text-slate-400 mt-0.5 tracking-wide">
          HEALTHCARE PLATFORM
        </p>

      </div>

    </Link>

  </div>


  {/* Navigation */}

  <div className="flex-1 overflow-y-auto px-4 py-6">

    <Navigation
      pathname={pathname}
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

    <AccountFooter handleLogout={handleLogout} />

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
}: any) {
return (
<>


  {menu.map((section: any) => (

    <div
      key={section.title}
      className="mb-7"
    >

      <div className="px-3 mb-2">

        <h3 className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
          {section.title}
        </h3>

      </div>


      <div className="space-y-1">

        {section.items.map((item: any) => {

          const Icon = item.icon;

          const active =
            isActive(item.href);

          return (

            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`
                group relative flex items-center justify-between
                rounded-2xl px-3.5 py-3
                transition-all duration-200
                ${
                  active
                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/10 text-white"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }
              `}
            >

              {active && (

                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 rounded-r-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

              )}


              <div className="flex items-center gap-3">

                <div
                  className={`
                    flex items-center justify-center
                    w-9 h-9 rounded-xl
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
                    strokeWidth={
                      active ? 2.3 : 2
                    }
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

                  <span className="min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>

                )}

                {active &&
                  !item.badge && (

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
return ( <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-4">


  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-emerald-500/10 blur-2xl" />

  <div className="relative">

    <div className="flex items-center gap-2 mb-3">

      <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">

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
      For medical emergencies, contact emergency services immediately.
    </p>

    <div className="flex items-center justify-between mt-4">

      <div>

        <div className="text-2xl font-bold text-white">
          112
        </div>

        <div className="text-[10px] text-slate-500">
          Emergency Services
        </div>

      </div>

      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">

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
return ( <div className="border-t border-white/10 pt-4">


  <div className="flex items-center justify-between gap-3 px-2">

    <Link
      href="/dashboard/profile"
      className="flex items-center gap-3 min-w-0 group"
    >

      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center border border-white/10">

        <User
          size={18}
          className="text-slate-300"
        />

      </div>

      <div className="min-w-0">

        <p className="text-sm font-semibold text-white truncate">
          My Account
        </p>

        <p className="text-[11px] text-slate-500 truncate">
          Manage your profile
        </p>

      </div>

    </Link>


    <button
      onClick={handleLogout}
      className="w-full mt-4 flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
    >
      <LogOut size={18} />
      Logout
    </button>

  </div>

</div>


);
}
