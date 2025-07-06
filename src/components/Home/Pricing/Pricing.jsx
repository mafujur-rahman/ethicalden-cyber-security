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
      }
    });

    tl.fromTo(containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    cardRefs.current.forEach((card, i) => {
      tl.fromTo(card,
        { opacity: 0, y: 60, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)"
        },
        i === 0 ? '-=0.4' : '-=0.5'
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
        'Email Support'
      ],
      highlighted: false
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
        'Priority Support'
      ],
      highlighted: true
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
        'Security Training'
      ],
      highlighted: false
    }
  ];

  return (
    <section id='pricing' ref={sectionRef} className="py-24 px-6 md:px-12 bg-slate-950 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10 opacity-0">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#09e5e5]/20 text-[#09e5e5] px-4 py-1 rounded-full mb-4 text-sm font-medium">
            PRICING PLANS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Flexible <span className="text-[#a8ff57]">Security Packages</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to your organization's size and needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 shadow-lg ${
                plan.highlighted 
                  ? 'border-[#a8ff57]/40 shadow-[#a8ff57]/20 scale-[1.03]' 
                  : 'border-[#09e5e5]/20 shadow-[#09e5e5]/10 opacity-0'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[#a8ff57]/10 text-[#a8ff57] text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block">
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
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                plan.highlighted
                  ? 'bg-[#a8ff57] hover:bg-[#8de24f] text-black'
                  : 'bg-slate-700 hover:bg-slate-600 text-gray-300'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
