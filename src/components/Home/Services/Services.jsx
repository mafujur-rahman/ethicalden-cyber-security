import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Services = () => {
  const leftLabels = [
    "Malware",
    "Database Exposures",
    "Vulnerabilities",
    "Phishing & Scams",
    "Dark Web Activity",
    "Honeypot Recon",
    "Zero-Days",
    "Geopolitical Attacks",
  ];

  const rightLabels = [
    "Implement Proactive Protective Measures",
    "Detect New Threats",
    "Block Known Threats",
    "Respond Quickly",
    "Analyze Threat Trends",
    "Correlate with Intelligence",
    "Prevent Data Leakage",
    "Real-time Monitoring",
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-12 xl:px-28 relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12 flex justify-center items-center gap-3 text-[#a8ff57] text-2xl tracking-wide uppercase">
        <FaArrowRightLong />
        <h2>Cyber Threat Intelligence</h2>
        <FaArrowRightLong />
      </div>

      {/* Responsive Scrollable Wrapper */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1024px] lg:min-w-full flex flex-row justify-between items-start relative z-10">
          {/* Left Labels */}
          <div className="relative w-[30%] flex justify-end px-4 shrink-0">
            {/* Vertical Line */}
            <span
              className="absolute right-16 w-[2px] bg-[#a8ff57]"
              style={{ top: "-80px", bottom: "-80px" }}
            />
            <ul className="flex flex-col gap-6 text-sm text-[#09e5e5] pr-6 z-10">
              {leftLabels.map((label, i) => (
                <li
                  key={i}
                  className="relative pr-6 flex items-center justify-end text-right"
                >
                  <span>{label}</span>
                  <span
                    className="ml-3 relative"
                    style={{ width: "24px", height: "8px" }}
                  >
                    <span className="absolute top-1/2 -translate-y-1/2 right-6 w-2 h-2 rounded-full bg-[#a8ff57]" />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 right-0 h-[2px] bg-[#a8ff57]"
                      style={{ width: "24px" }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Section with Image */}
          <div className="relative w-[40%] flex items-center justify-center h-[420px] shrink-0">
            {/* Decorative Background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-50">
              <div className="w-[400px] h-[400px] bg-[#09e5e5] rounded-full opacity-20 filter blur-3xl" />
            </div>

            {/* Text Around Image */}
            <div className="absolute top-10 text-2xl text-white text-center w-full">
              <p>Market & Partner Intelligence</p>
            </div>
            <div className="absolute bottom-10 text-2xl text-white text-center w-full">
              <p>
                Digital Forensic &<br />
                Incident Response
              </p>
            </div>
            <div className="absolute left-10 text-2xl text-white text-right w-32">
              <p>Proprietary Research</p>
            </div>
            <div className="absolute right-10 text-2xl text-white text-left w-32">
              <p>Threat Hunting</p>
            </div>

            <img
              src="/images/service-cy.png"
              alt="Cyber Threat"
              className="w-[300px] h-[300px] object-contain z-10"
            />
          </div>

          {/* Right Labels */}
          <div className="relative w-[30%] flex justify-start px-4 shrink-0">
            {/* Vertical Line */}
            <span
              className="absolute left-16 w-[2px] bg-[#a8ff57]"
              style={{ top: "-80px", bottom: "-80px" }}
            />
            <ul className="flex flex-col gap-6 text-sm text-[#09e5e5] pl-6 z-10">
              {rightLabels.map((label, i) => (
                <li
                  key={i}
                  className="relative pl-6 flex items-center justify-start text-left"
                >
                  <span
                    className="mr-3 relative"
                    style={{ width: "24px", height: "8px" }}
                  >
                    <span
                      className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-[#a8ff57]"
                      style={{ width: "24px" }}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-[#a8ff57]" />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-2xl text-[#a8ff57] mt-12 flex justify-center items-center gap-3">
        <FaArrowLeftLong />
        <p>Telemetry Continuously Applied from Attacks</p>
        <FaArrowLeftLong />
      </div>
    </div>
  );
};

export default Services;
