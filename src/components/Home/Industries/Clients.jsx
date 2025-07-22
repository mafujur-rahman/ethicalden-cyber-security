'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  "CyberGuard Inc.",
  "ShieldTech Solutions",
  "DataVault Systems",
  "SecureNet Ltd.",
  "FortifySoft",
  "SafeWave Corp.",
  "TrustLayer Security",
  "InvisiSecure",
  "DarkTrace AI",
  "RedWatch Cyber",
  "LockSphere",
  "HexaDefend",
];

export default function Clients() {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    const animateRow = (row, direction = 1) => {
      const boxes = row.querySelectorAll('.scroll-item');
      const totalWidth = Array.from(boxes).reduce((acc, box) => acc + box.offsetWidth + 40, 0);

      gsap.set(row, { x: 0 });

      gsap.to(row, {
        x: direction * -totalWidth / 2,
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            let val = parseFloat(x);
            const limit = totalWidth / 2;
            if (direction === 1) {
              return val % (-limit);
            } else {
              return ((val + limit) % limit) - limit;
            }
          }),
        },
      });
    };

    animateRow(rowOneRef.current, 1);
    animateRow(rowTwoRef.current, -1);
  }, []);

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-32 bg-black overflow-hidden text-white">
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl  md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-wide text-white">
          Our <span className="text-[#a8ff57]">Trusted Clients</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Proudly serving industry leaders in cybersecurity and digital defense
        </p>
      </div>

      {/* First Scrolling Row (Right to Left) */}
      <div className="w-full overflow-hidden mb-12">
        <div ref={rowOneRef} className="flex gap-10 w-max">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="scroll-item flex items-center justify-center w-64 h-20 flex-shrink-0 bg-[#1e1e1e] rounded-lg shadow-md text-lg font-semibold text-[#09e5e5] px-6 py-4 border border-[#09e5e5]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Second Scrolling Row (Left to Right) */}
      <div className="w-full overflow-hidden">
        <div ref={rowTwoRef} className="flex gap-10 w-max justify-end">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="scroll-item flex items-center justify-center w-64 h-20 flex-shrink-0 bg-[#1e1e1e] rounded-lg shadow-md text-lg font-semibold text-[#09e5e5] px-6 py-4 border border-[#09e5e5]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
