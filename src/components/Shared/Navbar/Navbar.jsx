'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(menuRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current,
          { y: -100, opacity: 0, duration: 0.3, ease: "power2.in" }
        );
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Navbar reveal animation
    const tl = gsap.timeline({ delay: 0.8 });
    tl.fromTo(navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      tl.kill();
    };
  }, []);

  return (
    <header ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 mx-6 md:mx-20 lg:mx-32 opacity-0">
      <div
        className="relative h-20 mt-4 flex items-center justify-between px-8"
        style={{
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(12px)',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
          border: '1px solid rgba(94, 234, 212, 0.1)',
        }}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          ethicalden<span className="text-cyan-400"> cyber security</span>
        </div>

        {/* Center nav */}
        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <nav className="flex space-x-10">
            {['Services', 'Resources', 'Blogs'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <button className="hidden lg:flex items-center gap-2 bg-white text-black font-semibold text-sm md:text-base py-3 px-6 md:py-4 md:px-8 rounded-md shadow-md hover:bg-gray-100 transition-all group">
          Contact Us
          <GoArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="menu-button lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-8 relative">
            <span className={`absolute block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-1/2' : 'top-1'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-1/2'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-1/2' : 'top-3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 left-0 w-full"
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(94, 234, 212, 0.1)',
            borderBottom: '1px solid rgba(94, 234, 212, 0.1)',
          }}
        >
          <div className="flex flex-col px-8 py-6">
            {['Services', 'Resources', 'Blogs', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white py-3 px-4 hover:bg-cyan-900/30 rounded-lg transition-colors duration-300 font-medium border-b border-gray-800 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};