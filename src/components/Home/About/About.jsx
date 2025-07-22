'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  '/images/banner-img.jpg',
  '/images/cy-banner.webp',
  '/images/Cybersecurity.jpeg',
];

const About = () => {
  const imageRef = useRef(null);
  const barRef = useRef(null);
  const barRef2 = useRef(null);

  useEffect(() => {
    // Image fade animation
    const el = imageRef.current.querySelector('img');
    let index = 0;

    const updateImage = () => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          index = (index + 1) % images.length;
          el.src = images[index];
          gsap.to(el, { opacity: 1, duration: 0.6 });
        },
      });
    };

    const interval = setInterval(updateImage, 6000);

    // Animate vertical position of the bar: down 10px then back
    const bar = barRef.current;
    gsap.to(bar, {
      y: 60,
      duration: 1.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });
    const bar2 = barRef2.current;
    gsap.to(bar2, {
      y: 60,
      duration: 1.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0c0c0c] px-6 md:px-12 xl:px-28 2xl:px-56 py-20">
      <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold max-w-7xl text-white mb-20 z-20">
        Securing the Digital World with Advanced{' '}
        <span className="text-[#a8ff57]">Cybersecurity Solutions</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Left Side - Circular 3D Animated Image Rotator */}
        <div className="relative w-[280px] md:w-[360px] lg:w-[450px] h-[280px] md:h-[360px] lg:h-[450px] mx-auto perspective-1000">
          <div
            ref={imageRef}
            className="absolute w-full h-full rounded-full overflow-hidden transition-transform duration-[2000ms] ease-in-out transform-style-preserve-3d animate-rotateImage"
          >
            <img
              src={images[0]}
              alt="Cybersecurity Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Outer Glow Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#a8ff57] animate-glow opacity-20 pointer-events-none" />
        </div>

        {/* Right Side - Info Section */}
        <div className="max-w-xl">
          <p className="text-2xl mb-6 text-[#09e5e5] font-bold">
            Since our inception, we've been committed to defending organizations
            from ever-evolving cyber threats with cutting-edge security
            technologies.
          </p>
          <p className="text-gray-300 mb-10">
            From threat detection and prevention to full-scale security
            operations, our comprehensive cybersecurity solutions protect
            businesses, governments, and institutions globally.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                {/* Animated vertical bar with fixed height */}
                <div
                  ref={barRef}
                  className="w-1 h-6 bg-[#a8ff57] mb-1 z-10"
                />
                <div className="w-0.5 h-20 -mt-7 bg-[#09e5e5]" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-[#a8ff57]">15+</span>
                  <span className="ml-2 text-sm text-[#09e5e5]">YEARS</span>
                </div>
                <p className="text-gray-400">
                  of proven experience in cybersecurity innovation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                {/* Animated vertical bar with fixed height */}
                <div
                  ref={barRef2}
                  className="w-1 h-6 bg-[#a8ff57] mb-1 z-10"
                />
                <div className="w-0.5 h-20 -mt-7 bg-[#09e5e5]" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-[#a8ff57]">500+</span>
                  <span className="ml-2 text-sm text-[#09e5e5]">CLIENTS</span>
                </div>
                <p className="text-gray-400">
                  trust us to safeguard their digital infrastructure.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 border text-xs md:text-xs lg:text-[16px] xl:text-xl text-black bg-[#a8ff57] hover:bg-[#09e5e5] hover:text-black transition rounded-full font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
