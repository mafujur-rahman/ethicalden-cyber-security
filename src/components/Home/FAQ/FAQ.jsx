'use client';

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
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      itemRefs.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
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
      answer:
        'We use a combination of AI-powered threat detection, behavior analytics, and 24/7 security operations center monitoring to identify and respond to threats in real-time.',
    },
    {
      question: 'Is my data safe with your service?',
      answer:
        'Absolutely. We follow zero-trust principles and encrypt all data at rest and in transit. Our security protocols exceed industry standards and compliance requirements.',
    },
    {
      question: 'How quickly can you respond to an incident?',
      answer:
        'Our average response time for critical threats is under 15 minutes. We have a dedicated incident response team available 24/7/365.',
    },
    {
      question: 'Do you provide compliance assistance?',
      answer:
        'Yes, we help organizations meet HIPAA, GDPR, PCI-DSS, and other regulatory requirements with comprehensive security frameworks and documentation.',
    },
    {
      question: 'What makes your service different?',
      answer:
        'Our combination of cutting-edge AI technology and human expertise allows us to detect advanced threats that automated systems miss, providing true defense-in-depth.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Contact us for a free security assessment. We'll evaluate your current posture and recommend a tailored security solution for your organization.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 xl:px-28 2xl:px-56 bg-black text-white">
      {/* Top Shared Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl  md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
          Need Help or <span className="text-[#a8ff57]">Want to Reach Out?</span>
        </h2>
        <p className="text-gray-400  text-lg">
          Explore our FAQs or connect with us directly – we’re here to assist you.
        </p>
      </div>

      {/* Columns Layout */}
      <div
        ref={containerRef}
        className=" grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-20"
      >
        {/* Left: FAQ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#09e5e5] mb-4">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => toggleFAQ(index)}
              className={`transition-all duration-300 border rounded-xl cursor-pointer p-6 bg-white/5 backdrop-blur-sm ${
                activeIndex === index
                  ? 'border-[#a8ff57] shadow-lg shadow-[#a8ff57]/30'
                  : 'border-[#333]'
              }`}
            >
              <div className="flex justify-between items-start">
                <h4
                  className={`text-lg font-semibold pr-4 transition-colors ${
                    activeIndex === index ? 'text-[#a8ff57]' : 'text-white'
                  }`}
                >
                  {faq.question}
                </h4>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className={`transition-transform duration-300 ease-in-out ${
                      activeIndex === index ? 'rotate-180 text-[#a8ff57]' : 'text-[#09e5e5]'
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-[#333]">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-2xl font-bold text-[#09e5e5] mb-4">Contact Us</h3>
          <div className="bg-white/5 backdrop-blur-sm border border-[#333] rounded-xl p-8">
            <p className="text-gray-300 mb-6">
              Still have questions? Reach out to our team directly.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-[#333] text-white focus:outline-none focus:border-[#a8ff57]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-[#333] text-white focus:outline-none focus:border-[#a8ff57]"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-[#333] text-white focus:outline-none focus:border-[#a8ff57]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#a8ff57]  text-black font-semibold py-2 px-6 rounded-full transition hover:bg-[#09e5e5]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
