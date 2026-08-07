"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  "/hero/nepox2.png",
  "/hero/nepox3.png",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl">

      {slides.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-1000
          ${
            current === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-20 flex h-full flex-col justify-center px-12">

        <span className="mb-4 w-fit rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
          Trusted Healthcare Platform
        </span>

        <h1 className="max-w-xl text-5xl font-bold leading-tight text-white">
          Healthcare guidance,
          <br />
          whenever you need it.
        </h1>

        <p className="mt-5 max-w-lg text-lg text-white/90">
          Connect with licensed nurses, ask public or private
          questions, and receive trusted healthcare support.
        </p>

        <Link
          href="/dashboard/questions/ask?visibility=PUBLIC"
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-2xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-500"
        >
          <MessageCircle size={20} />
          Ask a Question
          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i
                ? "w-10 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
}