'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoShieldCheck, GoLock, GoEye, GoGraph } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <GoShieldCheck className="text-3xl" />,
      title: 'Threat Intelligence',
      description: 'Proactive monitoring and analysis of emerging cyber threats to protect your assets',
    },
    {
      icon: <GoLock className="text-3xl" />,
      title: 'Vulnerability Management',
      description: 'Comprehensive security assessments and continuous vulnerability tracking',
    },
    {
      icon: <GoEye className="text-3xl" />,
      title: 'Incident Response',
      description: '24/7 rapid response team to contain and eradicate security breaches',
    },
    {
      icon: <GoGraph className="text-3xl" />,
      title: 'Compliance Advisory',
      description: 'Ensure regulatory compliance with industry-specific security frameworks',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-28 px-6 md:px-12 bg-[#111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-16">
          <div className="inline-block bg-[#09e5e5]/20 text-[#09e5e5] px-4 py-1 rounded-full text-sm font-medium mb-4">
            SECURE YOUR DIGITAL FRONTIER
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white opacity-0"
          >
            Enterprise-Grade <span className="text-[#a8ff57]">Cyber Defense</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Comprehensive cybersecurity solutions designed to protect your organization from evolving digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-slate-800/40 backdrop-blur-md border border-[#09e5e5]/20 hover:border-[#a8ff57]/40 transition-all rounded-2xl p-6 text-left text-white shadow-xl shadow-black/10 hover:shadow-[#09e5e5]/10"
            >
              <div className="bg-[#a8ff57]/10 w-14 h-14 flex items-center justify-center rounded-lg mb-6 text-[#a8ff57] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
              <div className="mt-5 h-0.5 bg-gradient-to-r from-[#a8ff57] to-transparent w-10 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
