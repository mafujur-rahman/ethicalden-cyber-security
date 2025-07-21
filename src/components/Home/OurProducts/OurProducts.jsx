'use client'
import React, { useState } from 'react';

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

    return (
        <div className='px-6 lg:px-12 py-20'>
            {/* Section Title */}
            <h1 className="text-4xl lg:text-8xl font-extrabold max-w-7xl mb-20 z-20">
                Cutting-Edge Cyber Security Products to Safeguard Your Digital World.
            </h1>

            {/* Product List */}
            <div className='text-2xl font-bold grid grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer'>
                {products.map((product, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedProduct(product.title)}
                        className={`flex items-center gap-4 p-2 rounded-md transition hover:text-teal-800 ${selectedProduct === product.title ? ' text-teal-800' : ''
                            }`}
                    >
                        <img src={product.img} alt={product.title} className="w-auto h-20 object-contain" />
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>

            <hr className="mt-12 border-t border-gray-300" />

            {/* Featured Products Section */}
            <div className='mt-16 flex flex-col lg:flex-row items-start justify-between gap-16'>
                <div className="lg:w-1/2">
                    <p className="text-xl mb-6 max-w-lg">
                        Our cybersecurity systems provide enterprise-grade protection for your entire digital infrastructure.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-teal-700 text-white font-bold px-6 py-3 rounded-md hover:bg-teal-800 transition">
                            LEARN MORE
                        </button>
                        <button className="border border-teal-700 text-teal-700 font-bold px-6 py-3 rounded-md hover:bg-teal-100 transition">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {featuredMap[selectedProduct]?.map((product, index) => (
                            <div
                                key={index}
                                className="group border rounded-lg p-6 hover:shadow-2xl transition duration-300 min-h-[450px] flex flex-col items-center justify-between"
                            >
                                <div className="overflow-hidden rounded-md flex justify-center items-center h-60">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="h-32 object-contain transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className=" mt-6">
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
