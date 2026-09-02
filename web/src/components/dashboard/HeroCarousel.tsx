
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  "/hero/nepox4.png",
  "/hero/nepox5.png",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        min-h-[500px]
        overflow-hidden
        rounded-[1.5rem]
        shadow-xl
        sm:min-h-[440px]
        sm:rounded-[2rem]
        lg:min-h-[420px]
      "
    >
      {/* IMAGES */}

      {slides.map((image, index) => (
        <div
          key={image}
          className={`
            absolute
            inset-0
            transition-all
            duration-1000
            ${
              current === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }
          `}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 1600px"
            className="
              object-cover
              object-center
              sm:object-center
            "
          />
        </div>
      ))}

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/45
          to-black/15
          sm:bg-gradient-to-r
          sm:from-black/70
          sm:via-black/35
          sm:to-transparent
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-20
          flex
          min-h-[500px]
          flex-col
          justify-end
          px-5
          pb-16
          pt-10
          sm:min-h-[440px]
          sm:justify-center
          sm:px-8
          sm:pb-14
          lg:min-h-[420px]
          lg:px-12
        "
      >
        <h1
          className="
            max-w-[620px]
            text-[2rem]
            font-bold
            leading-[1.08]
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-5xl
            lg:leading-tight
          "
        >
          Healthcare guidance,
          <br />
          whenever you need it.
        </h1>

        <p
          className="
            mt-4
            max-w-[520px]
            text-sm
            leading-6
            text-white/90
            sm:mt-5
            sm:text-base
            sm:leading-7
            lg:text-lg
          "
        >
          Connect with licensed nurses, ask public or
          private questions, and receive trusted
          healthcare support.
        </p>

        
      </div>

      {/* SLIDE INDICATORS */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2.5
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
            className={`
              h-2.5
              rounded-full
              transition-all
              ${
                current === index
                  ? "w-9 bg-white"
                  : "w-2.5 bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}