'use client';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const OurProducts = () => {
  const products = [
    { title: "Firewall Appliance", img: "/images/firewall.jpg" },
    { title: "Endpoint Protection", img: "/images/endpoint.jpg" },
    { title: "Network Intrusion Detection", img: "/images/intrusion.jpg" },
    { title: "Security Information & Event Management (SIEM)", img: "/images/seim.jpg" },
  ];

  const featuredMap = {
    "Firewall Appliance": [
      {
        title: "Advanced Firewall System",
        description: "Enterprise-grade firewall for network protection and traffic control",
        img: "/images/firewall.jpg",
      },
      {
        title: "NextGen Firewall Defender",
        description: "Smart firewall with threat detection & VPN integration",
        img: "/images/firewall.jpg",
      }
    ],
    "Endpoint Protection": [
      {
        title: "Endpoint Security Suite",
        description: "Complete protection for devices against malware and unauthorized access",
        img: "/images/endpoint.jpg",
      },
      {
        title: "Device Shield Pro",
        description: "Advanced endpoint monitoring & control software",
        img: "/images/endpoint.jpg",
      }
    ],
    "Network Intrusion Detection": [
      {
        title: "Intrusion Detection Engine",
        description: "Real-time network traffic analysis to detect threats",
        img: "/images/intrusion.jpg",
      },
      {
        title: "Snort-Based Monitoring",
        description: "Open-source intrusion detection with detailed logging",
        img: "/images/intrusion.jpg",
      }
    ],
    "Security Information & Event Management (SIEM)": [
      {
        title: "SIEM Central Console",
        description: "Event correlation and incident response system",
        img: "/images/seim.jpg",
      },
      {
        title: "Log Analyzer Pro",
        description: "Visual log analysis for quick anomaly detection",
        img: "/images/seim.jpg",
      }
    ]
  };

  const [selectedProduct, setSelectedProduct] = useState(products[0].title);
  const [visibleProducts, setVisibleProducts] = useState(featuredMap[products[0].title]);
  const cardContainerRef = useRef(null);

  const handleSelectProduct = (title) => {
    if (title === selectedProduct) return;

    const cards = cardContainerRef.current?.children;
    if (!cards) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut', duration: 0.5 }
    });

    // Fade out current cards with stagger for nice effect
    tl.to(cards, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    // Update cards content
    tl.add(() => {
      setVisibleProducts(featuredMap[title]);
      setSelectedProduct(title);
    });

    // Animate new cards coming up simultaneously (no stagger)
    tl.add(() => {
      const newCards = cardContainerRef.current?.children;
      if (!newCards) return;

      gsap.set(newCards, {
        opacity: 0,
        y: window.innerHeight || 1000,
      });

      gsap.to(newCards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0, 
      });
    }, '+=0.1');
  };

  return (
    <div id='works' className='bg-[#0c0c0c] px-6 md:px-12 xl:px-28 2xl:px-56 py-20'>
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold max-w-7xl mb-20 z-20">
        Cutting-Edge Cyber Security Products to <span className='text-[#a8ff57]'>Safeguard Your Digital World.</span>
      </h1>

      {/* Product List */}
      <div className='text-2xl font-bold grid md:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer text-white'>
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleSelectProduct(product.title)}
            className={`flex items-center gap-4 p-2 rounded-md transition hover:text-[#09e5e5] ${selectedProduct === product.title ? 'text-[#09e5e5]' : ''}`}
          >
            <img src={product.img} alt={product.title} className="w-auto h-20 object-contain rounded-full" />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>

      <hr className="mt-5 border-t border-gray-300" />

      {/* Featured Products */}
      <div className='mt-16 flex flex-col lg:flex-row items-start justify-between gap-16'>
        <div className="lg:w-1/2">
          <p className="text-xl mb-6 max-w-lg text-white">
            Our cybersecurity systems provide enterprise-grade protection for your entire digital infrastructure.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 border text-xs md:text-xs lg:text-[16px] xl:text-xl text-black bg-[#a8ff57] hover:bg-[#09e5e5] hover:text-black transition rounded-full font-semibold">
              LEARN MORE
            </button>
            <button className="px-6 py-3 border text-xs md:text-xs lg:text-[16px] xl:text-xl text-black bg-[#09e5e5] hover:bg-[#a8ff57] hover:text-black transition rounded-full font-semibold">
              GET IN TOUCH
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold mb-6 text-[#a8ff57]">Featured Products</h2>
          <div ref={cardContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="group border rounded-lg p-6 hover:shadow-2xl transition duration-300 min-h-[450px] flex flex-col items-center justify-between bg-white"
              >
                <div className="overflow-hidden rounded-md flex justify-center items-center h-60">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-40 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
