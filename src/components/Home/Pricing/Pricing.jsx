'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoShieldCheck } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    cardRefs.current.forEach((card, i) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 80, rotateY: -10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.9,
          ease: 'power4.out',
        },
        i * 0.2
      );
    });
  }, []);

  const plans = [
    {
      name: 'Essential',
      price: '$1,499',
      period: '/month',
      description: 'For small businesses and startups',
      features: [
        '24/7 Threat Monitoring',
        'Vulnerability Scanning',
        'Basic Firewall Protection',
        'Monthly Security Reports',
        'Email Support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'All Essential features',
        'Advanced Threat Detection',
        'Incident Response (24h)',
        'Weekly Security Reports',
        'Compliance Assistance',
        'Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'All Professional features',
        'Dedicated Security Team',
        '<15m Incident Response',
        'Real-time Threat Intelligence',
        'Custom Security Policies',
        '24/7 Premium Support',
        'Security Training',
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 xl:px-28 2xl:px-56 bg-[#0c0c0c] relative overflow-hidden"
    >
      <div ref={containerRef} className="relative z-10 opacity-0">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#09e5e5]/20 text-[#09e5e5] px-4 py-1 rounded-full mb-4 text-sm font-medium">
            PRICING PLANS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6">
            Flexible <span className="text-[#a8ff57]">Security Packages</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your organization's size and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative group flex flex-col transition-all duration-300 ease-in-out transform bg-white/5 backdrop-blur-md border rounded-2xl p-8 shadow-lg hover:scale-[1.025] hover:-translate-y-2 hover:shadow-[#09e5e5]/10 ${
                plan.highlighted
                  ? 'border-[#a8ff57]/50 shadow-[#a8ff57]/10 scale-[1.03]'
                  : 'border-[#09e5e5]/20 shadow-black/10 opacity-0'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-1.5 lg:top-4 lg:right-4 bg-[#a8ff57]/10 text-[#a8ff57] text-xs px-3 py-1 rounded-full font-medium">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <GoShieldCheck className="text-[#09e5e5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#a8ff57] hover:bg-[#09e5e5] text-black'
                    : 'bg-[#09e5e5] hover:bg-[#a8ff57] text-black'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
