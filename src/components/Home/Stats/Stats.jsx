'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const threatMapRef = useRef(null);

  const stats = [
    { value: '2.4M', label: 'Threats Blocked Daily' },
    { value: '98.7%', label: 'Malware Detection Rate' },
    { value: '<15s', label: 'Average Response Time' },
    { value: '15K+', label: 'Protected Endpoints' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((stat, i) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          }
        );

        const valueElement = stat.querySelector('.stat-value');
        const targetValue = stats[i].value;

        if (targetValue.includes('+') || targetValue.includes('<')) {
          gsap.to(valueElement, {
            opacity: 1,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          });
        } else {
          gsap.to(valueElement, {
            innerText: parseFloat(targetValue),
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
            onUpdate: function () {
              const current = parseFloat(this.targets()[0].innerText);
              valueElement.innerText = Math.ceil(current).toLocaleString();
            },
            onComplete: function () {
              gsap.to(valueElement, {
                scale: 1.1,
                color: '#a8ff57',
                duration: 0.2,
                yoyo: true,
                repeat: 1,
              });
            },
          });
        }
      });

      // Animate radar dots & lines
      if (threatMapRef.current) {
        const dots = threatMapRef.current.querySelectorAll('.threat-dot');
        const lines = threatMapRef.current.querySelectorAll('.threat-line');

        gsap.to(dots, {
          duration: 5,
          x: () => gsap.utils.random(-20, 20),
          y: () => gsap.utils.random(-20, 20),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to(lines, {
          duration: 4,
          opacity: () => gsap.utils.random(0.1, 0.5),
          scaleX: () => gsap.utils.random(0.8, 1.3),
          repeat: -1,
          yoyo: true,
          stagger: 0.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 bg-[#1c1c1c] overflow-hidden relative"
    >
      {/* Header */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Real-Time <span className="text-[#a8ff57]">Threat Intelligence</span>
        </h2>
        <p className="text-[#09e5e5] text-lg">
          Live data insights into threat defense and endpoint protection.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statRefs.current[index] = el)}
            className="bg-slate-800/30 border border-[#a8ff57]/20 backdrop-blur-lg rounded-lg px-5 py-6 text-center shadow-md hover:shadow-[#a8ff57]/10 transition-all duration-300"
          >
            <div className="stat-value text-3xl md:text-4xl font-bold text-[#a8ff57] mb-2">
              {stat.value}
            </div>
            <p className="text-[#09e5e5] text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>


      {/* Radar Map */}
      <div
        ref={threatMapRef}
        className="bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-[#09e5e5]/10 p-8 max-w-6xl mx-auto relative shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">
            <span className="text-[#a8ff57]">LIVE</span> Global Threat Map
          </h3>
          <div className="md:flex gap-3">
            <div className="flex items-center gap-1 text-red-400 text-sm">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              Critical
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              High
            </div>
            <div className="flex items-center gap-1 text-[#09e5e5] text-sm">
              <div className="w-3 h-3 bg-[#09e5e5] rounded-full animate-pulse"></div>
              Medium
            </div>
          </div>
        </div>

        <div className="relative h-80 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden border border-[#a8ff57]/10">
          {/* Dots */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute threat-dot rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                backgroundColor:
                  i % 3 === 0
                    ? '#ef4444'
                    : i % 3 === 1
                      ? '#f97316'
                      : '#09e5e5',
                boxShadow: `0 0 6px ${i % 3 === 0
                    ? '#ef4444'
                    : i % 3 === 1
                      ? '#f97316'
                      : '#09e5e5'
                  }`,
              }}
            ></div>
          ))}

          {/* Lines */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute threat-line h-0.5 origin-left"
              style={{
                left: `${Math.random() * 30}%`,
                top: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 50}%`,
                transform: `rotate(${Math.random() * 45 - 20}deg)`,
                background: `linear-gradient(to right, transparent, ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#09e5e5'
                  }, transparent)`,
              }}
            ></div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-sm text-[#09e5e5] flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a8ff57] rounded-full animate-pulse"></div>
            Last updated: <span className="text-[#a8ff57]">Just now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            Tracking <span className="text-[#a8ff57]">1.2M</span> active threats
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-[#a8ff57]">342</span> critical events last hour
          </div>
        </div>
      </div>

      {/* Glowing background blobs */}
      <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-[#09e5e5]/10 blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#a8ff57]/10 blur-[100px] -z-10" />
    </section>
  );
};

export default Stats;
