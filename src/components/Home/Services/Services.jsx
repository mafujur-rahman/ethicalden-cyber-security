'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoShieldCheck, GoLock, GoEye, GoGraph } from 'react-icons/go';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);


export const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    cardRefs.current.forEach((card, i) => {
      tl.fromTo(card,
        { opacity: 0, y: 60, scale: 0.8 },
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

  const services = [
    { 
      icon: <GoShieldCheck className="text-3xl" />,
      title: 'Threat Intelligence',
      description: 'Proactive monitoring and analysis of emerging cyber threats to protect your assets'
    },
    { 
      icon: <GoLock className="text-3xl" />,
      title: 'Vulnerability Management',
      description: 'Comprehensive security assessments and continuous vulnerability tracking'
    },
    { 
      icon: <GoEye className="text-3xl" />,
      title: 'Incident Response',
      description: '24/7 rapid response team to contain and eradicate security breaches'
    },
    { 
      icon: <GoGraph className="text-3xl" />,
      title: 'Compliance Advisory',
      description: 'Ensure regulatory compliance with industry-specific security frameworks'
    }
  ];

  return (
    <section id='services' ref={sectionRef} className="relative py-28 px-6 md:px-12 bg-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full mix-blend-screen blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-cyan-900/30 text-cyan-400 px-4 py-1 rounded-full mb-4 text-sm font-medium"
          >
            SECURE YOUR DIGITAL FRONTIER
          </motion.div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white mb-6 text-center opacity-0">
            Enterprise-Grade <span className="text-cyan-400">Cyber Defense</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive cybersecurity solutions designed to protect your organization from evolving digital threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-cyan-500/10 opacity-0 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-cyan-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
              <div className="mt-6">
                <div className="w-8 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

