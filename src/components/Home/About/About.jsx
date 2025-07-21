'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  '/images/banner-img.jpg',
  '/images/cy-banner.webp',
  '/images/Cybersecurity.jpeg',
];

const About = () => {
  const imageRef = useRef(null);
  const radius = 100;
  const currentImageIndex = useRef(0);

  const stops = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const segmentCount = stops.length;
  const totalSegmentDuration = 2.4;
  const fadeDuration = 0.5;
  const pauseDuration = 0.6;
  const fadeBeforeStopRatio = 0.97;
  const angleObj = useRef({ angle: 0 });

  const setPosition = (angle) => {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    gsap.set(imageRef.current, { x, y });
  };

  useEffect(() => {
    const el = imageRef.current;
    el.src = images[currentImageIndex.current];
    gsap.set(el, { opacity: 0 });
    setPosition(angleObj.current.angle);

    let segmentIndex = 0;

    const animateSegment = () => {
      const startAngle = angleObj.current.angle;
      const baseStopAngle = stops[segmentIndex % segmentCount];
      const rotationsDone = Math.floor(startAngle / (2 * Math.PI));
      const nextStopAngleBase = baseStopAngle + rotationsDone * 2 * Math.PI;

      const nextStopAngle =
        nextStopAngleBase > startAngle
          ? nextStopAngleBase
          : nextStopAngleBase + 2 * Math.PI;

      const fadeStartAngle =
        startAngle + (nextStopAngle - startAngle) * fadeBeforeStopRatio;

      gsap.to(angleObj.current, {
        angle: fadeStartAngle,
        duration: totalSegmentDuration * fadeBeforeStopRatio,
        ease: 'power1.inOut',
        onUpdate: () => setPosition(angleObj.current.angle),
        onComplete: () => {
          gsap.to(el, {
            opacity: 0,
            duration: fadeDuration,
            onComplete: () => {
              currentImageIndex.current =
                (currentImageIndex.current + 1) % images.length;
              el.src = images[currentImageIndex.current];

              gsap.to(el, {
                opacity: 1,
                duration: fadeDuration,
                onComplete: () => {
                  gsap.to(angleObj.current, {
                    angle: nextStopAngle,
                    duration: totalSegmentDuration * (1 - fadeBeforeStopRatio),
                    ease: 'power1.inOut',
                    onUpdate: () => setPosition(angleObj.current.angle),
                    onComplete: () => {
                      gsap.delayedCall(pauseDuration, () => {
                        segmentIndex++;
                        animateSegment();
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    };

    gsap.to(el, {
      opacity: 1,
      duration: fadeDuration,
      onComplete: animateSegment,
    });
  }, []);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-4xl lg:text-8xl font-extrabold max-w-7xl mb-20 z-20">
        Securing the Digital World with Advanced Cybersecurity Solutions
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 px-40">
        {/* Left Side - Animated Circles with Image */}
        <div className="relative w-[500px] h-[500px] -mt-36 -ml-56">
          <div className="absolute inset-0 rounded-full border-[0.5px] border-gray-300 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-gray-400 animate-spin-slower" />
          <img
            ref={imageRef}
            className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 opacity-0 rounded-full border-4 border-white shadow-xl"
            alt="Rotating Image"
          />
        </div>

        {/* Right Side - Info Section */}
        <div className="max-w-xl">
          <p className="text-2xl mb-6 font-semibold">
            <strong>
              Since our inception, we've been committed to defending organizations from ever-evolving cyber threats with cutting-edge security technologies.
            </strong>
          </p>
          <p className="text-gray-700 mb-10">
            From threat detection and prevention to full-scale security operations, our comprehensive cybersecurity solutions protect businesses, governments, and institutions globally.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-1 h-6 bg-black mb-1 z-10" />
                <div className="w-0.5 h-16 -mt-3 bg-gray-400" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">15+</span>
                  <span className="ml-2 text-sm text-gray-500">YEARS</span>
                </div>
                <p className="text-gray-600">of proven experience in cybersecurity innovation.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-1 h-6 bg-black mb-1 z-10" />
                <div className="w-0.5 h-16 bg-gray-400 -mt-3" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">500+</span>
                  <span className="ml-2 text-sm text-gray-500">CLIENTS</span>
                </div>
                <p className="text-gray-600">trust us to safeguard their digital infrastructure.</p>
              </div>
            </div>
          </div>

          <button className="mt-10 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
