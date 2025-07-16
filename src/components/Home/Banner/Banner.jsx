'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

export const Banner = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const paraRef = useRef(null);
  const iconRef = useRef(null);
  let glowTween = useRef(null);
  let bgTween = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, delay: 0.2 }
    )
      .fromTo(buttonRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, '-=0.6')
      .fromTo(paraRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, '-=0.6');
  }, []);

  useEffect(() => {
    const btn = buttonRef.current;
    const icon = iconRef.current;

    if (!btn || !icon) return;

    const onHoverIn = () => {
      if (bgTween.current) bgTween.current.kill();

      // Animate background from white to greenish (#a8ff57)
      bgTween.current = gsap.to(btn, {
        duration: 0.8,
        backgroundColor: '#a8ff57',
        ease: 'power2.out',
      });

      // Glowing shadow pulse
      glowTween.current = gsap.to(btn, {
        boxShadow:
          '0 0 12px 4px rgba(168,255,87,0.7), 0 0 24px 8px rgba(9,229,229,0.5)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Animate arrow icon slide and rotation
      gsap.to(icon, {
        x: 8,
        y: -4,
        rotation: 15,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const onHoverOut = () => {
      if (bgTween.current) bgTween.current.kill();

      bgTween.current = gsap.to(btn, {
        duration: 0.8,
        backgroundColor: '#fff',
        ease: 'power2.inOut',
      });

      if (glowTween.current) glowTween.current.kill();

      gsap.to(btn, {
        boxShadow: 'none',
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.to(icon, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };

    btn.addEventListener('mouseenter', onHoverIn);
    btn.addEventListener('mouseleave', onHoverOut);

    return () => {
      btn.removeEventListener('mouseenter', onHoverIn);
      btn.removeEventListener('mouseleave', onHoverOut);
      if (glowTween.current) glowTween.current.kill();
      if (bgTween.current) bgTween.current.kill();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content wrapper at bottom-left */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-16 z-10">
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
              className="inline-flex items-center gap-2 w-fit bg-white text-black font-semibold text-sm lg:text-base py-3 px-6 md:py-3 md:px-6 rounded-full shadow-md border border-transparent transition-all relative overflow-visible"
              style={{ willChange: 'backgroundColor, box-shadow' }}
            >
              GET A CONSULTATION
              <GoArrowUpRight
                ref={iconRef}
                className="text-lg relative"
                style={{ pointerEvents: 'none' }}
              />
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
