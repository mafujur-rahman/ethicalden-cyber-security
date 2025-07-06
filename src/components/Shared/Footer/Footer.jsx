'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GoShieldCheck,
  GoGlobe, GoMail, GoLocation, 
} from 'react-icons/go';
import { 
  FaLinkedinIn, FaTwitter, 
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 px-6 md:px-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#09e5e5] w-10 h-10 rounded-lg flex items-center justify-center">
                <GoShieldCheck className="text-xl text-black" />
              </div>
              <span className="text-white font-bold text-2xl">CyberSecurity</span>
            </div>
            <p className="text-[#09e5e5] mb-6 max-w-xs">
              Enterprise-grade cybersecurity solutions protecting businesses since 2012.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#09e5e5] hover:text-[#a8ff57] hover:bg-[#141414] transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#09e5e5] hover:text-[#a8ff57] hover:bg-[#141414] transition-colors">
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {['Threat Intelligence', 'Vulnerability Management', 'Incident Response', 'Compliance Advisory', 'Penetration Testing', 'Security Training'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#09e5e5] hover:text-[#a8ff57] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#09e5e5] hover:text-[#a8ff57] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <GoLocation className="text-[#09e5e5] mt-1 flex-shrink-0" />
                <span className="text-[#09e5e5]">123 Security Blvd, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3">
                <GoMail className="text-[#09e5e5] flex-shrink-0" />
                <span className="text-[#09e5e5]">contact@cybersecurity.com</span>
              </li>
              <li className="flex items-center gap-3">
                <GoGlobe className="text-[#09e5e5] flex-shrink-0" />
                <span className="text-[#09e5e5]">www.cybersecurity.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#09e5e5] text-sm">© {new Date().getFullYear()} Cybers Security. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-[#09e5e5] hover:text-[#a8ff57] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#09e5e5] hover:text-[#a8ff57] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[#09e5e5] hover:text-[#a8ff57] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
