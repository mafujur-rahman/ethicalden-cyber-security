'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
  const ballRef = useRef(null);
  const ringRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate the white ball
    gsap.to(ballRef.current, {
      rotate: 360,
      duration: 6,
      ease: 'linear',
      repeat: -1,
      transformOrigin: '50% 50%',
    });

    // Animate the third ring
    gsap.to(ringRef.current, {
      rotate: -360,
      duration: 10,
      ease: 'linear',
      repeat: -1,
      transformOrigin: '50% 50%',
    });

    // Move right section opposite to mouse movement
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
    <section className="w-full min-h-[110vh] bg-[#111] text-white flex flex-col md:flex-row items-center justify-between xl:justify-around px-6 md:px-12 xl:px-28 2xl:px-42 py-20 relative pt-36 overflow-hidden gap-10 2xl:gap-6">
      {/* Left Content */}
      <div className="w-full md:w-1/2  md:text-left z-10">
        <h1 className="text-3xl  md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold leading-tight max-w-2xl 2xl:max-w-3xl mx-auto md:mx-0">
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

      {/* Right Image with Decorative Circles */}
      <div
        ref={rightRef}
        className="relative flex items-center justify-center w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] aspect-square mx-auto lg:mx-0 z-10"
      >
        {/* Decorative Rings */}
        <div className="absolute w-full h-full rounded-full border border-white/30 border-dashed"></div>
        <div
          ref={ringRef}
          className="absolute w-[85%] h-[85%] rounded-full border-2 border-[#a8ff57]/40 border-dashed"
        ></div>
        <div className="absolute w-[73%] h-[73%] rounded-full border-6 border-white/30"></div>

        <div className="absolute w-[61%] h-[61%] rounded-full border-2 border-white z-10">
          <div
            ref={ballRef}
            className="absolute w-full h-full rounded-full"
          >
            <div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 shadow-lg" />
          </div>
        </div>

        <div className="relative w-[61%] h-[61%] rounded-full overflow-hidden">
          <Image
            src="/images/banner-cy.jpeg"
            alt="Cybersecurity Banner"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>

      {/* Decorative Background Circle */}
      <div className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full bg-teal-400/10 blur-3xl opacity-30 pointer-events-none"></div>
    </section>

  );
};

export default Banner;
