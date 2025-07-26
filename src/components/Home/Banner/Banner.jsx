'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
  const leftRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current.querySelectorAll('h1, p, button'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3
      }
    );
  }, []);

  return (
    <section
      className="w-full min-h-[100vh] bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 xl:px-28 2xl:px-56 py-20 relative pt-36 md:pt-76 lg:pt-40 xl:pt-52 2xl:pt-64 overflow-hidden gap-10"
      style={{
        backgroundImage: "url('/images/banner-img.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Left Content */}
      <div ref={leftRef} className="w-full lg:w-1/2 text-left z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="block mb-2">Advanced Cyber</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8ff57] to-[#09e5e5]">
            Defense Solutions
          </span>
        </h1>

        <p className="text-gray-300 mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
          Protecting digital ecosystems with cutting-edge security frameworks designed
          to anticipate and neutralize modern threats—ensuring your data remains impenetrable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2 text-sm xl:text-base bg-gradient-to-r from-[#a8ff57] to-[#09e5e5] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#09e5e540] transition-all duration-300 transform hover:-translate-y-1 group">
            <span>EXPLORE SOLUTIONS</span>
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button className="px-6 py-2 text-sm xl:text-base border border-[#a8ff57] text-[#a8ff57] hover:border-[#09e5e5] hover:bg-[#09e5e5] hover:text-black font-semibold rounded-full  transition-all duration-300">
            REQUEST DEMO
          </button>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#a8ff57] animate-pulse" />
            <span>24/7 Threat Monitoring</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#a8ff57] animate-pulse" />
            <span>AI-Powered Protection</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#a8ff57] animate-pulse" />
            <span>Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
