'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Clients = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const scrollers = container.querySelectorAll('.scroller');
    
    scrollers.forEach((scroller) => {
      // Duplicate content for seamless looping
      scroller.innerHTML = scroller.innerHTML + scroller.innerHTML;
      
      // Animation
      gsap.to(scroller, {
        x: () => -(scroller.scrollWidth / 2),
        ease: "none",
        repeat: -1,
        duration: 40,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (scroller.scrollWidth / 2))
        }
      });
    });
  }, []);

  const clients = [
    { name: 'FinTech Global', logo: 'FG' },
    { name: 'MedSecure', logo: 'MS' },
    { name: 'GovSecure', logo: 'GS' },
    { name: 'E-Commerce Solutions', logo: 'ES' },
    { name: 'EnergyGrid Inc', logo: 'EG' },
    { name: 'TechInnovate', logo: 'TI' },
    { name: 'BankSecure', logo: 'BS' },
    { name: 'HealthData Systems', logo: 'HS' }
  ];

  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-[#a8ff57] mb-10 font-semibold">
          Trusted by industry leaders
        </h3>
        
        <div ref={containerRef} className="relative w-full">
          {/* First scrolling row */}
          <div className="scroller flex w-max gap-16 py-4">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-4 shrink-0">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-bold"
                  style={{
                    background: `linear-gradient(135deg, #09e5e5, #a8ff57)`,
                    color: '#000000',
                  }}
                >
                  {client.logo}
                </div>
                <span className="text-white font-medium">{client.name}</span>
              </div>
            ))}
          </div>
          
          {/* Second scrolling row (reverse) */}
          <div className="scroller flex w-max gap-16 py-4 mt-6">
            {[...clients].reverse().map((client, index) => (
              <div key={index} className="flex items-center gap-4 shrink-0">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-bold"
                  style={{
                    background: `linear-gradient(135deg, #09e5e5, #a8ff57)`,
                    color: '#000000',
                  }}
                >
                  {client.logo}
                </div>
                <span className="text-white font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
