'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const threatMapRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats cards animation
      statRefs.current.forEach((stat, i) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          }
        );

        // Hover effect
        stat.addEventListener('mouseenter', () => {
          gsap.to(stat, {
            y: -10,
            boxShadow: '0 10px 30px rgba(168, 255, 87, 0.4)', // bright green glow
            duration: 0.3,
          });
        });

        stat.addEventListener('mouseleave', () => {
          gsap.to(stat, {
            y: 0,
            boxShadow: '0 4px 15px rgba(168, 255, 87, 0.2)', // subtle green glow
            duration: 0.3,
          });
        });
      });

      // Counting animation
      statRefs.current.forEach((stat, index) => {
        const valueElement = stat.querySelector('.stat-value');
        const targetValue = stats[index].value;

        if (targetValue.includes('+') || targetValue.includes('<')) {
          gsap.to(valueElement, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          });
        } else {
          gsap.to(valueElement, {
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
            onUpdate: function () {
              valueElement.innerText = Math.ceil(this.targets()[0].innerText);
            },
            onComplete: function () {
              gsap.to(valueElement, {
                keyframes: [
                  { scale: 1.05, color: '#a8ff57', duration: 0.2 }, // bright green pulse
                  { scale: 1, color: '#09e5e5', duration: 0.3 }, // teal settle
                ],
              });
            },
          });
        }
      });

      // Threat map animations
      if (threatMapRef.current) {
        gsap.to(threatMapRef.current.querySelectorAll('.threat-dot'), {
          duration: 5,
          x: () => gsap.utils.random(-20, 20),
          y: () => gsap.utils.random(-15, 15),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to(threatMapRef.current.querySelectorAll('.threat-line'), {
          duration: 4,
          opacity: () => gsap.utils.random(0.1, 0.5),
          scaleX: () => gsap.utils.random(0.8, 1.2),
          repeat: -1,
          yoyo: true,
          stagger: 0.1,
        });
      }

      // Animated particles
      particlesRef.current.forEach((particle) => {
        gsap.to(particle, {
          x: 'random(-100, 100)',
          y: 'random(-100, 100)',
          duration: 'random(10, 20)',
          repeat: -1,
          repeatRefresh: true,
          ease: 'sine.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '2.4M', label: 'Threats Blocked Daily' },
    { value: '98.7%', label: 'Malware Detection Rate' },
    { value: '<15s', label: 'Average Response Time' },
    { value: '15K+', label: 'Protected Endpoints' },
  ];

  return (
    <section
      id="stats"
      className="py-24 px-6 md:px-12 bg-slate-900 relative overflow-hidden"
      ref={sectionRef}
    >
     

      {/* Section title */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-white">Real-Time Threat Intelligence</span>
          </h2>
          <p className="text-[#a8ff57] max-w-2xl mx-auto">
            Advanced threat detection and prevention statistics updated in real-time
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statRefs.current[index] = el)}
              className="text-center bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 relative overflow-hidden border border-[#a8ff57]/20 hover:border-[#a8ff57]/40 transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px rgba(168, 255, 87, 0.2)', // bright green shadow
              }}
            >
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#09e5e5]/10 to-[#a8ff57]/10 rounded-xl blur-sm opacity-20"></div>

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#a8ff57] mb-3 stat-value">
                  {stat.value}
                </div>
                <div className="text-[#09e5e5] text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Threat map visualization */}
        <div
          ref={threatMapRef}
          className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 relative overflow-hidden border border-[#a8ff57]/20"
          style={{
            boxShadow: '0 0 15px rgba(168, 255, 87, 0.2)', // bright green glow
          }}
        >
          {/* Map header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">
              <span className="text-[#a8ff57]">LIVE</span> Global Threat Map
            </h3>
            <div className="md:flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm">Critical</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <span className="text-amber-400 text-sm">High</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 bg-[#09e5e5] rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
                <span className="text-[#09e5e5] text-sm">Medium</span>
              </div>
            </div>
          </div>

          {/* Threat map visualization */}
          <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-[#a8ff57]/20">
            {/* World map outline */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <path
                  d="M150,150 Q200,100 250,150 T350,150 Q400,100 450,150 T550,150 Q600,100 650,150"
                  stroke="#09e5e5"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M200,250 Q250,200 300,250 T400,250 Q450,200 500,250 T600,250"
                  stroke="#09e5e5"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Simulated threat dots */}
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute threat-dot rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 4}px`,
                  height: `${Math.random() * 10 + 4}px`,
                  backgroundColor:
                    i % 4 === 0
                      ? '#ef4444'
                      : i % 4 === 1
                      ? '#f97316'
                      : i % 4 === 2
                      ? '#eab308'
                      : '#09e5e5',
                  boxShadow: `0 0 ${Math.random() * 8 + 4}px ${
                    i % 4 === 0
                      ? '#ef4444'
                      : i % 4 === 1
                      ? '#f97316'
                      : i % 4 === 2
                      ? '#eab308'
                      : '#09e5e5'
                  }`,
                }}
              ></div>
            ))}

            {/* Connection lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute threat-line h-0.5 origin-left"
                style={{
                  left: `${Math.random() * 40}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 60}%`,
                  transform: `rotate(${-10 + Math.random() * 20}deg)`,
                  background: `linear-gradient(to right, transparent, ${
                    i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#09e5e5'
                  }, transparent)`,
                  opacity: 0.3,
                }}
              ></div>
            ))}

            {/* Animated radar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-[#a8ff57]/30">
              <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#a8ff57]/50 to-transparent"></div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#a8ff57]/50 to-transparent"></div>

              <div className="radar-sweep absolute top-1/2 left-1/2 w-40 h-40">
                <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-[#a8ff57]/20 via-[#a8ff57] to-[#a8ff57]/20"></div>
              </div>
            </div>
          </div>

          {/* Map footer */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 text-[#09e5e5] text-sm gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#a8ff57] animate-pulse"></div>
              <span>
                Last updated: <span className="text-[#a8ff57]">Just now</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                style={{ animationDelay: '0.3s' }}
              ></div>
              <span>
                Tracking <span className="text-[#a8ff57]">1.2M</span> active threats globally
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
                style={{ animationDelay: '0.6s' }}
              ></div>
              <span>
                <span className="text-[#a8ff57]">342</span> critical incidents in last hour
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#09e5e5]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#a8ff57]/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Stats;
