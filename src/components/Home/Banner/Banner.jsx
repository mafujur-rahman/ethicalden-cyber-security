'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from "react-icons/go";

export const Banner = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, delay: 0.2 }
    )
    .fromTo(buttonRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0 }, "-=0.6"
    )
    .fromTo(paraRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0 }, "-=0.6"
    );
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cy-banner.jpg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content wrapper at bottom-left */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-20 lg:px-32 pb-16 z-10">
        <div className="text-white">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-5xl"
          >
            Focused Cybersecurity Services That Deliver Results. We Secure What Matters.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              ref={buttonRef}
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm md:text-base py-3 px-6 md:py-4 md:px-8 rounded-md shadow-md hover:bg-gray-100 transition-all group"
            >
              GET A CONSULTATION
              <GoArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p
              ref={paraRef}
              className="text-slate-200 text-base max-w-md"
            >
              By centering its operations on a few areas of deep expertise, CyFocus provides unparalleled specialisation — giving clients the confidence support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
