'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / 40;
      const offsetY = (e.clientY - innerHeight / 2) / 40;

      gsap.to(rightRef.current, {
        x: -offsetX,
        y: -offsetY,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="w-full min-h-[110vh] bg-black text-white flex flex-col md:flex-row items-center justify-between xl:justify-around px-6 md:px-12 xl:px-28 2xl:px-42 py-20 relative pt-36 overflow-hidden gap-10 2xl:gap-6">
      {/* Left Content */}
      <div className="w-full md:w-1/2 md:text-left z-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold leading-tight max-w-2xl 2xl:max-w-3xl mx-auto md:mx-0">
          Trusted Cybersecurity<br />
          <span className="text-[#a8ff57]">for a Safer Future</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto md:mx-0 mt-6 text-base sm:text-lg leading-relaxed">
          Safeguarding digital environments with cutting-edge security solutions tailored
          for modern threats—because your data deserves protection.
        </p>

        <button className="mt-8 px-6 py-3 border text-xs md:text-xs lg:text-[16px] xl:text-xl text-black bg-[#a8ff57] hover:bg-[#09e5e5] hover:text-black transition rounded-full font-semibold">
          EXPLORE OUR SECURITY SOLUTIONS
        </button>
      </div>

      {/* Right Image with Artistic Curves */}
      <div className="relative w-full md:w-1/2 max-w-[520px] aspect-square mx-auto lg:mx-0 z-10">
        {/* Curved SVG Background */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          width="520"
          height="520"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          
        </svg>

        <div
          ref={rightRef}
          className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#09e5e540]"
          style={{ zIndex: 10 }}
        >
          <Image
            src="/images/banner-img.png"
            alt="Cybersecurity Banner"
            fill
            className="object-cover rounded-[2rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
