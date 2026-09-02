"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-[#f6f8f7]">

      <div className="mx-auto w-full max-w-7xl space-y-5 sm:space-y-7">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <HeroCarousel />

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div className="grid gap-5 xl:grid-cols-12">

          {/* ================================================= */}
          {/* PRIMARY COLUMN */}
          {/* ================================================= */}

          <div className="space-y-5 xl:col-span-8">

            {/* ================================================= */}
            {/* ASK ACTIONS */}
            {/* ================================================= */}

            <section className="grid gap-4 sm:grid-cols-2">

              {/* PUBLIC */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-emerald-100
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:p-6
                "
              >

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-emerald-50
                    transition
                    group-hover:scale-150
                  "
                />

                <div className="relative">

                  <div
                    className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-50
                      text-emerald-600
                    "
                  >
                    <MessageCircle size={27} />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    Ask the Community
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500 sm:min-h-[52px]">
                    Share your health question publicly
                    and receive helpful answers from
                    qualified nurses.
                  </p>

                  <Link
                    href="/dashboard/questions/ask?visibility=PUBLIC"
                    className="
                      mt-6
                      inline-flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-emerald-600
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      active:scale-[0.98]
                      hover:bg-emerald-700
                      sm:w-fit
                    "
                  >
                    Ask Public Question
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>

              {/* PRIVATE */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-violet-100
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:p-6
                "
              >

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-violet-50
                    transition
                    group-hover:scale-150
                  "
                />

                <div className="relative">

                  <div
                    className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-violet-50
                      text-violet-600
                    "
                  >
                    <Lock size={26} />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    Ask Privately
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500 sm:min-h-[52px]">
                    Have a sensitive concern? Ask
                    privately and communicate
                    confidentially with a nurse.
                  </p>

                  <Link
                    href="/dashboard/questions/ask?visibility=PRIVATE"
                    className="
                      mt-6
                      inline-flex
                      min-h-[48px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-emerald-600
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      active:scale-[0.98]
                      hover:bg-emerald-700
                      sm:w-fit
                    "
                  >
                    Ask Private Question
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>

            </section>

            {/* ================================================= */}
            {/* FEATURED NURSE - MOBILE PRIORITY */}
            {/* ================================================= */}

            <section className="xl:hidden">
              <FeaturedNurse />
            </section>

            {/* ================================================= */}
            {/* HEALTH TIP */}
            {/* ================================================= */}

            <section
              className="
                relative
                min-h-[500px]
                overflow-hidden
                rounded-[1.5rem]
                text-white
                shadow-xl
                sm:min-h-[440px]
                sm:rounded-[1.75rem]
              "
            >

              <Image
                src="/images/tod.png"
                alt="Drink water"
                fill
                sizes="(max-width: 1280px) 100vw, 66vw"
                className="object-cover object-right"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#063b30]/95
                  via-[#065f46]/75
                  to-[#065f46]/15
                  sm:bg-gradient-to-r
                  sm:from-[#063b30]/95
                  sm:via-[#065f46]/70
                  sm:to-transparent
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[500px]
                  flex-col
                  justify-end
                  p-5
                  pb-7
                  sm:min-h-[440px]
                  sm:justify-center
                  sm:p-7
                  lg:p-9
                "
              >

                <div>

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >

                    <div>

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          bg-white/10
                          px-3.5
                          py-2
                          text-xs
                          font-medium
                          text-emerald-100
                          backdrop-blur-sm
                          sm:text-sm
                        "
                      >
                        <Sparkles size={15} />
                        Today's Health Tip
                      </div>

                      <h2
                        className="
                          mt-4
                          max-w-2xl
                          text-2xl
                          font-bold
                          leading-tight
                          sm:mt-5
                          sm:text-3xl
                        "
                      >
                        Drink Water Before You
                        Feel Thirsty
                      </h2>

                    </div>

                    <div className="flex items-center gap-2 text-xs text-emerald-100 sm:text-sm">
                      <CalendarDays size={16} />
                      June 27, 2026
                    </div>

                  </div>

                  <p
                    className="
                      mt-5
                      max-w-3xl
                      text-sm
                      leading-6
                      text-emerald-50/90
                      sm:mt-6
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    Your body begins to lose fluids long
                    before you actually feel thirsty.
                    Drinking enough water throughout
                    the day helps regulate body
                    temperature, supports concentration,
                    aids digestion, and helps your
                    kidneys function properly.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">

                    {[
                      "Hydration",
                      "Daily Wellness",
                      "Prevention",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/10
                          px-3.5
                          py-2
                          text-[11px]
                          font-medium
                          text-white
                          backdrop-blur-sm
                          sm:px-4
                          sm:text-xs
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">

                    <Link
                      href="/dashboard/health-topics"
                      className="
                        inline-flex
                        min-h-[48px]
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-emerald-700
                        transition
                        active:scale-[0.98]
                        hover:bg-emerald-50
                        sm:flex-none
                        sm:px-5
                      "
                    >
                      Read Full Article
                      <ArrowRight size={16} />
                    </Link>

                    <button
                      type="button"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/20
                        bg-white/10
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-sm
                        transition
                        active:scale-[0.98]
                        hover:bg-white/20
                      "
                    >
                      <Heart size={17} />
                      <span className="hidden xs:inline">
                        Helpful
                      </span>
                    </button>

                    <button
                      type="button"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/20
                        bg-white/10
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-sm
                        transition
                        active:scale-[0.98]
                        hover:bg-white/20
                      "
                    >
                      <Bookmark size={17} />
                      <span className="hidden sm:inline">
                        Save
                      </span>
                    </button>

                  </div>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* DISCLAIMER */}
            {/* ================================================= */}

            <section
              className="
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                sm:p-6
              "
            >

              <div className="flex items-start gap-3.5">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-600
                    sm:h-11
                    sm:w-11
                  "
                >
                  <ShieldCheck size={21} />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Important Health Information
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    NurseQ&A provides health information
                    and general guidance. It does not
                    replace professional medical diagnosis
                    or emergency medical care. If you are
                    experiencing a medical emergency,
                    contact emergency services or visit
                    the nearest healthcare facility.
                  </p>

                </div>

              </div>

            </section>

          </div>

          {/* ================================================= */}
          {/* DESKTOP RIGHT COLUMN */}
          {/* ================================================= */}

          <div className="hidden space-y-5 xl:col-span-4 xl:block">

            <FeaturedNurse />

            <HowItWorks />

            <PopularTopics />

          </div>

          {/* ================================================= */}
          {/* MOBILE SECONDARY CONTENT */}
          {/* ================================================= */}

          <div className="space-y-5 xl:hidden">

            <HowItWorks />

            <PopularTopics />

          </div>

        </div>

        {/* ================================================= */}
        {/* PLATFORM STATS */}
        {/* ================================================= */}

        <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">

          {[
            {
              icon: Users,
              value: "12,540+",
              label: "Registered Users",
            },
            {
              icon: ShieldCheck,
              value: "256",
              label: "Verified Nurses",
            },
            {
              icon: HelpCircle,
              value: "8,921",
              label: "Questions Asked",
            },
            {
              icon: CheckCircle,
              value: "7,612",
              label: "Questions Answered",
            },
            {
              icon: Star,
              value: "4.8",
              label: "Average Rating",
            },
          ].map((stat, index) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:p-5
                  ${
                    index === 4
                      ? "col-span-2 lg:col-span-1"
                      : ""
                  }
                `}
              >

                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-50
                      text-slate-600
                      transition
                      group-hover:bg-emerald-50
                      group-hover:text-emerald-600
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <ArrowRight
                    size={15}
                    className="
                      text-slate-300
                      transition
                      group-hover:translate-x-1
                      group-hover:text-emerald-500
                    "
                  />

                </div>

                <h3
                  className="
                    mt-4
                    text-xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    sm:mt-5
                    sm:text-2xl
                  "
                >
                  {stat.value}
                </h3>

                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 sm:text-xs">
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

/* ===================================================== */
/* FEATURED NURSE */
/* ===================================================== */

function FeaturedNurse() {
  return (
    <section
      className="
        overflow-hidden
        rounded-[1.5rem]
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >

      <div className="h-20 bg-gradient-to-r from-emerald-700 to-teal-600 sm:h-24" />

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">

        <div className="-mt-10 flex justify-center sm:-mt-12">

          <img
            src="/images/avatar.jpg"
            alt="Cynthia Anigala"
            className="
              h-20
              w-20
              rounded-3xl
              border-4
              border-white
              object-cover
              shadow-lg
              sm:h-24
              sm:w-24
            "
          />

        </div>

        <div className="mt-4 text-center">

          <div className="flex items-center justify-center gap-2">

            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Cynthia Anigala, RN
            </h3>

            <CheckCircle
              size={17}
              className="shrink-0 fill-emerald-500 text-white"
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

        <div
          className="
            mt-5
            space-y-3
            rounded-2xl
            bg-slate-50
            p-4
            text-sm
          "
        >

          <div className="flex items-start justify-between gap-4">

            <span className="text-slate-500">
              Specialties
            </span>

            <span className="text-right font-medium leading-5 text-slate-800">
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

        <div className="mt-4 grid grid-cols-2 gap-3">

          <Link
            href="/dashboard/nurses"
            className="
              flex
              min-h-[46px]
              items-center
              justify-center
              rounded-xl
              bg-slate-900
              px-3
              text-center
              text-sm
              font-semibold
              text-white
              transition
              active:scale-[0.98]
              hover:bg-slate-800
            "
          >
            View Profile
          </Link>

          <Link
            href="/dashboard/questions/ask?visibility=PRIVATE"
            className="
              flex
              min-h-[46px]
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              px-3
              text-center
              text-sm
              font-semibold
              text-slate-700
              transition
              active:scale-[0.98]
              hover:bg-slate-50
            "
          >
            Ask Privately
          </Link>

        </div>

      </div>

    </section>
  );
}

/* ===================================================== */
/* HOW IT WORKS */
/* ===================================================== */

function HowItWorks() {
  const steps = [
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
  ];

  return (
    <section
      className="
        rounded-[1.5rem]
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        sm:p-6
      "
    >

      <div className="mb-5">

        <h3 className="text-xl font-bold text-slate-900">
          How NurseQ&A Works
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Getting trusted health guidance is simple.
        </p>

      </div>

      <div className="space-y-6">

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative flex gap-4"
          >

            {index < steps.length - 1 && (
              <div
                className="
                  absolute
                  left-5
                  top-11
                  h-8
                  w-px
                  bg-slate-200
                "
              />
            )}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-xs
                font-bold
                text-emerald-700
              "
            >
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
  );
}

/* ===================================================== */
/* POPULAR TOPICS */
/* ===================================================== */

function PopularTopics() {
  const topics = [
    "Headache",
    "Fever",
    "Pregnancy",
    "Diabetes",
    "Blood Pressure",
    "Skin Care",
  ];

  return (
    <section
      className="
        rounded-[1.5rem]
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        sm:p-6
      "
    >

      <div className="flex items-center justify-between gap-4">

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
          aria-label="View all health topics"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-slate-600
            transition
            hover:bg-emerald-50
            hover:text-emerald-600
          "
        >
          <ChevronRight size={18} />
        </Link>

      </div>

      <div className="mt-5 flex flex-wrap gap-2">

        {topics.map((topic) => (
          <Link
            key={topic}
            href="/dashboard/health-topics"
            className="
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              px-3.5
              py-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              active:scale-[0.98]
              hover:border-emerald-200
              hover:bg-emerald-50
              hover:text-emerald-700
            "
          >
            {topic}
          </Link>
        ))}

      </div>

    </section>
  );
}