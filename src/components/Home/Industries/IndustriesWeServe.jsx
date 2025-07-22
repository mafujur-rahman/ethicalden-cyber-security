'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaLaptopCode,
} from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

export const IndustriesWeServe = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  const industries = [
    {
      icon: <FaBuilding className="text-3xl text-[#a8ff57]" />,
      title: 'Finance',
      description: 'Protecting financial systems with real-time security layers.',
    },
    {
      icon: <FaHospital className="text-3xl text-[#a8ff57]" />,
      title: 'Healthcare',
      description: 'Safeguarding patient data across digital health platforms.',
    },
    {
      icon: <FaShoppingCart className="text-3xl text-[#a8ff57]" />,
      title: 'E-commerce',
      description: 'Quantum-ready encryption for online commerce systems.',
    },
    {
      icon: <FaUniversity className="text-3xl text-[#a8ff57]" />,
      title: 'Government',
      description: 'Defending public sector data and critical infrastructure.',
    },
    {
      icon: <FaLaptopCode className="text-3xl text-[#a8ff57]" />,
      title: 'Technology',
      description: 'Protecting innovation through smart AI-layered firewalls.',
    },
    {
      icon: <GoGlobe className="text-3xl text-[#a8ff57]" />,
      title: 'Energy',
      description: 'Securing smart grids and industrial IoT environments.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      itemRefs.current.forEach((el, i) => {
        const dir = i % 2 === 0 ? -100 : 100;
        gsap.fromTo(
          el,
          { opacity: 0, x: dir },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-28 px-6 md:px-12 xl:px-28 2xl:px-56 bg-[#0c0c0c] overflow-hidden"
    >

      {/* Header */}
      <div ref={headerRef} className="relative z-10 text-center max-w-4xl mx-auto mb-20 opacity-0">
        <span className="inline-block bg-[#09e5e5]/20 text-[#09e5e5] px-4 py-1 rounded-full text-sm font-semibold mb-4">
          INDUSTRY EXPERTISE
        </span>
        <h2 className="text-3xl  md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4">
          Industries <span className="text-[#a8ff57]">We Protect</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Tomorrow’s systems demand today's proactive cybersecurity innovation.
        </p>
      </div>

      {/* Industry Items Zigzag Layout */}
      <div className="relative z-10  flex flex-col gap-16">
        {industries.map((industry, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } group`}
          >
            {/* Icon */}
            <div className="z-10 shrink-0 w-16 h-16 rounded-full bg-[#a8ff57]/10 border border-[#a8ff57]/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>

            {/* Content */}
            <div className="bg-slate-800/30 border border-[#09e5e5]/10 backdrop-blur-md px-6 py-5 rounded-2xl text-white w-full md:w-1/2 shadow-xl hover:shadow-[#09e5e5]/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#a8ff57] mb-2">{industry.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{industry.description}</p>
              <div className="mt-4 h-0.5 bg-gradient-to-r from-[#a8ff57] to-transparent w-10 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
