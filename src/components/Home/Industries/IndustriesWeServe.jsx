'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaLaptopCode
} from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

export const IndustriesWeServe = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const industries = [
    {
      icon: <FaBuilding className="text-3xl text-cyan-400" />,
      title: 'Finance',
      description: 'Protecting financial systems with real-time security layers.',
    },
    {
      icon: <FaHospital className="text-3xl text-cyan-400" />,
      title: 'Healthcare',
      description: 'Safeguarding patient data across digital health platforms.',
    },
    {
      icon: <FaShoppingCart className="text-3xl text-cyan-400" />,
      title: 'E-commerce',
      description: 'Quantum-ready encryption for online commerce systems.',
    },
    {
      icon: <FaUniversity className="text-3xl text-cyan-400" />,
      title: 'Government',
      description: 'Defending public sector data and critical infrastructure.',
    },
    {
      icon: <FaLaptopCode className="text-3xl text-cyan-400" />,
      title: 'Technology',
      description: 'Protecting innovation through smart AI-layered firewalls.',
    },
    {
      icon: <GoGlobe className="text-3xl text-cyan-400" />,
      title: 'Energy',
      description: 'Securing smart grids and industrial IoT environments.',
    }
  ];

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    itemRefs.current.forEach((el, i) => {
      const direction = i % 2 === 0 ? -200 : 200; // even = left, odd = right
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: direction,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id='blogs'
      ref={sectionRef}
      className="py-28 px-6 md:px-12 bg-slate-950 overflow-hidden relative"
    >
      {/* Header */}
      <div ref={containerRef} className="text-center max-w-4xl mx-auto mb-24 opacity-0 relative z-10">
        <span className="inline-block bg-cyan-900/30 text-cyan-400 px-4 py-1 rounded-full text-sm font-semibold mb-5">
          INDUSTRY EXPERTISE
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Industries <span className="text-cyan-400">We Protect</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Tomorrow’s systems demand today's proactive cybersecurity innovation.
        </p>
      </div>

      {/* Zigzag Layout Without Center Line */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-20">
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
          >
            {/* Icon */}
            <div className="z-10 shrink-0 w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shadow-md">
              {industry.icon}
            </div>

            {/* Content */}
            <div className="bg-slate-800/20 border border-cyan-400/10 backdrop-blur-md px-6 py-4 rounded-2xl text-white w-full md:w-1/2">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">{industry.title}</h3>
              <p className="text-slate-300 text-sm">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
