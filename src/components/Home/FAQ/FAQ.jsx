'use client'
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FAQs = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FAQ items animation
      itemRefs.current.forEach((item, i) => {
        gsap.fromTo(item,
          { 
            opacity: 0, 
            y: 40,
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            }
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do you monitor for threats?',
      answer: 'We use a combination of AI-powered threat detection, behavior analytics, and 24/7 security operations center monitoring to identify and respond to threats in real-time.'
    },
    {
      question: 'Is my data safe with your service?',
      answer: 'Absolutely. We follow zero-trust principles and encrypt all data at rest and in transit. Our security protocols exceed industry standards and compliance requirements.'
    },
    {
      question: 'How quickly can you respond to an incident?',
      answer: 'Our average response time for critical threats is under 15 minutes. We have a dedicated incident response team available 24/7/365.'
    },
    {
      question: 'Do you provide compliance assistance?',
      answer: 'Yes, we help organizations meet HIPAA, GDPR, PCI-DSS, and other regulatory requirements with comprehensive security frameworks and documentation.'
    },
    {
      question: 'What makes your service different?',
      answer: 'Our combination of cutting-edge AI technology and human expertise allows us to detect advanced threats that automated systems miss, providing true defense-in-depth.'
    },
    {
      question: 'How do I get started?',
      answer: 'Contact us for a free security assessment. We\'ll evaluate your current posture and recommend a tailored security solution for your organization.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-slate-900">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-cyan-900/30 text-cyan-400 px-4 py-1 rounded-full mb-4 text-sm font-medium tracking-wider">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-cyan-400 ">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our cybersecurity services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`bg-slate-800/30 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                  : 'border-slate-700'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start justify-between cursor-pointer">
                <h3 className={`text-xl font-bold pr-4 transition-colors ${
                  activeIndex === index ? 'text-cyan-400' : 'text-white'
                }`}>
                  {faq.question}
                </h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                    }`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path 
                      d="M12 5V19M5 12H19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      className={`transition-opacity ${
                        activeIndex === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <path 
                      d="M5 12H19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      className={`transition-opacity ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </svg>
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100 mt-4' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};