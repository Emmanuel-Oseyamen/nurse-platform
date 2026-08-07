"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Heart,
  HelpCircle,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import HeroCarousel from "@/components/dashboard/HeroCarousel";
import Image from "next/image";

export default function DashboardPage() {
  return ( <div className="min-h-screen bg-[#f6f8f7]">

    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-5 sm:space-y-8 sm:px-6 lg:px-8">

        <HeroCarousel />

      {/* =====================================================
          MAIN DASHBOARD GRID
      ===================================================== */}

      <div className="grid gap-6 xl:grid-cols-12">


        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <div className="space-y-6 xl:col-span-8">


          {/* =================================================
              ASK QUESTION CARDS
          ================================================= */}

          <section className="grid gap-5 sm:grid-cols-2">

            {/* PUBLIC QUESTION */}

            <div className="group relative on duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-50 transition group-hover:scale-150" />

              <div className="relative">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <MessageCircle size={27} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Ask the Community
                </h2>

                <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-500">
                  Share your health question publicly and receive
                  helpful answers from qualified nurses.
                </p>

                <Link
                  href="/dashboard/questions/ask?visibility=PUBLIC"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Ask Public Question
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>


            {/* PRIVATE QUESTION */}

            <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-50 transition group-hover:scale-150" />

              <div className="relative">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <Lock size={26} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                  Ask Privately
                </h2>

                <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-500">
                  Have a sensitive concern? Ask privately and
                  communicate confidentially with a nurse.
                </p>

                <Link
                  href="/dashboard/questions/ask?visibility=PRIVATE"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-fit"
                >
                  Ask Private Question
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </section>


          {/* =================================================
              TODAY'S HEALTH TIP
          ================================================= */}

          <section className="relative min-h-[380px] overflow-hidden rounded-3xl text-white shadow-xl sm:min-h-[420px] lg:min-h-[460px]">

            <Image
              src="/images/tod.png"
              alt="Drink water"
              fill
              className="object-cover object-right"
              priority={false}
            />
  
            <div className="absolute inset-0 bg-gradient-to-r from-[#063b30]/95 via-[#065f46]/80 sm:via-[#065f46]/70 to-transparent" />

            <div className="relative z-10 p-5 sm:p-7 lg:p-9">

            <div> 
              {/* Tip Header */}

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur-sm">

                    <Sparkles size={15} />

                    Today's Health Tip

                  </div>

                  <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
                    Drink Water Before You Feel Thirsty
                  </h2>

                </div>


                <div className="flex items-center gap-2 text-sm text-emerald-100">

                  <CalendarDays size={16} />

                  June 27, 2026

                </div>

              </div>


              {/* Tip Content */}

              <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 sm:text-lg">

                Your body begins to lose fluids long before you actually
                feel thirsty. Drinking enough water throughout the day
                helps regulate body temperature, supports concentration,
                aids digestion, and helps your kidneys function properly.

              </p>


              {/* Tags */}

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Hydration",
                  "Daily Wellness",
                  "Prevention",
                ].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>

                ))}

              </div>


              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/dashboard/health-topics"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>

                <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                  <Heart size={17} />
                  Helpful
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                  <Bookmark size={17} />
                  Save
                </button>

              </div>
            </div>

            </div>

          </section>


          {/* =================================================
              DISCLAIMER
          ================================================= */}

          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

                <ShieldCheck size={22} />

              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  Important Health Information
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  NurseQ&A provides health information and general
                  guidance. It does not replace professional medical
                  diagnosis or emergency medical care. If you are
                  experiencing a medical emergency, contact emergency
                  services or visit the nearest healthcare facility.
                </p>

              </div>

            </div>

          </section>

        </div>


      {/* =================================================
          RIGHT COLUMN
      ================================================= */}

        <div className="space-y-6 xl:col-span-4">


        {/* =================================================
            FEATURED NURSE
        ================================================= */}

          <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">

            <div className="h-24 bg-gradient-to-r from-emerald-700 to-teal-600" />

            <div className="px-6 pb-6">

              <div className="-mt-12 flex justify-center">

                <img
                  src="https://i.pravatar.cc/200?img=47"
                  alt="Cynthia Anigala"
                  className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-lg"
                />

              </div>

              <div className="mt-4 text-center">

                <div className="flex items-center justify-center gap-2">

                  <h3 className="text-xl font-bold text-slate-900">
                    Cynthia Anigala, RN
                  </h3>

                  <CheckCircle
                    size={18}
                    className="fill-emerald-500 text-white"
                  />

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Registered Nurse
                </p>

                <div className="mt-3 flex items-center justify-center gap-1 text-sm">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold text-slate-800">
                    4.9
                  </span>

                  <span className="text-slate-400">
                    · 128 reviews
                  </span>

                </div>

              </div>


            {/* Nurse Details */}

              <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm">

                <div className="flex items-start justify-between gap-4">

                  <span className="text-slate-500">
                    Specialties
                  </span>

                  <span className="text-right font-medium text-slate-800">
                    General Nursing,
                    <br />
                    Maternal Health,
                    <br />
                    Pediatrics
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-slate-500">
                    Experience
                  </span>

                  <span className="font-medium text-slate-800">
                    7 years
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-slate-500">
                    Availability
                  </span>

                  <span className="flex items-center gap-2 font-medium text-emerald-600">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    Available now

                  </span>

                </div>

              </div>


            {/* Nurse Actions */}

            <div className="mt-5 grid grid-cols-2 gap-3">

              <Link
                href="/dashboard/nurses"
                className="rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Profile
              </Link>

              <Link
                href="/dashboard/questions/ask?visibility=PRIVATE"
                className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Ask Privately
              </Link>

            </div>

          </div>

        </section>


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6">

            <h3 className="text-xl font-bold text-slate-900">
              How NurseQ&A Works
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Getting trusted health guidance is simple.
            </p>

          </div>


          <div className="space-y-6">

            {[
              {
                number: "01",
                title: "Ask Your Question",
                description:
                  "Describe your concern and choose whether you want your question to be public or private.",
              },
              {
                number: "02",
                title: "A Nurse Reviews It",
                description:
                  "A qualified nurse reviews your question and provides helpful professional guidance.",
              },
              {
                number: "03",
                title: "Get Trusted Guidance",
                description:
                  "Read the response, ask follow-up questions, and take the next step with confidence.",
              },
            ].map((step, index) => (

              <div
                key={step.number}
                className="relative flex gap-4"
              >

                {index < 2 && (
                  <div className="absolute left-5 top-11 h-8 w-px bg-slate-200" />
                )}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-bold text-emerald-700">
                  {step.number}
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =================================================
            POPULAR TOPICS
        ================================================= */}

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                Explore Topics
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Find health information by topic.
              </p>

            </div>

            <Link
              href="/dashboard/health-topics"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ChevronRight size={18} />
            </Link>

          </div>


          <div className="mt-5 flex flex-wrap gap-2">

            {[
              "Headache",
              "Fever",
              "Pregnancy",
              "Diabetes",
              "Blood Pressure",
              "Skin Care",
            ].map((topic) => (

              <Link
                key={topic}
                href="/dashboard/health-topics"
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {topic}
              </Link>

            ))}

          </div>

        </section>

      </div>

    </div>


    {/* =====================================================
        PLATFORM STATS
    ===================================================== */}

    <section className="grid grid-cols-2 gap-4 lg:grid-cols-5">

      {[
        {
          icon: Users,
          value: "12,540+",
          label: "Registered Users",
          color: "emerald",
        },
        {
          icon: ShieldCheck,
          value: "256",
          label: "Verified Nurses",
          color: "violet",
        },
        {
          icon: HelpCircle,
          value: "8,921",
          label: "Questions Asked",
          color: "blue",
        },
        {
          icon: CheckCircle,
          value: "7,612",
          label: "Questions Answered",
          color: "emerald",
        },
        {
          icon: Star,
          value: "4.8",
          label: "Average Rating",
          color: "yellow",
        },
      ].map((stat) => {

        const Icon = stat.icon;

        return (

          <div
            key={stat.label}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition group-hover:bg-emerald-50 group-hover:text-emerald-600">

                <Icon size={20} />

              </div>

              <ArrowRight
                size={16}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500"
              />

            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-500">
              {stat.label}
            </p>

          </div>

        );

      })}

    </section>

  </div>

</div>

);
}
