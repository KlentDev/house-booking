"use client";

import React, { FC, useEffect, useState } from "react";
import imagePng from "@/images/travelhero2.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  const [count, setCount] = useState(0);
  const targetCount = 2500;

  useEffect(() => {
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
          Your Perfect Stay Awaits
        </span>
        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          Comfortable Rooms <br /> Unforgettable Stays
        </h2>
        <ButtonPrimary
          sizeClass="px-6 py-3 lg:px-8 lg:py-4 rounded-xl"
          fontSize="text-sm sm:text-base lg:text-lg font-medium"
          href="/check-availability"
        >
          Book Your Stay Now
        </ButtonPrimary>
        
        <div className="flex items-center gap-4 pt-4">
          <div className="flex -space-x-2">
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://avatar.vercel.sh/user1" alt="Avatar 1" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://avatar.vercel.sh/user2" alt="Avatar 2" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://avatar.vercel.sh/user3" alt="Avatar 3" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://avatar.vercel.sh/user4" alt="Avatar 4" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://avatar.vercel.sh/user5" alt="Avatar 5" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-neutral-900">{count.toLocaleString()}+</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-neutral-600">Trusted by happy guests</p>
          </div>
        </div>
      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        <Image
          className="absolute inset-0 object-cover rounded-xl"
          src={imagePng}
          alt="hero"
          priority
        />
      </div>
    </div>
  );
};

export default SectionHero3;
