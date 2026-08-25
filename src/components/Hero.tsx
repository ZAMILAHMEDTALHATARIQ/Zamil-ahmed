import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Parallax on the SVG elements
    gsap.to(".parallax-layer-1", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".parallax-layer-2", {
      y: 400,
      rotation: 180,
      transformOrigin: "center center",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".circle-scroll", {
      rotation: 360,
      transformOrigin: "center center",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Initial load animation for text
    gsap.fromTo(".hero-text-line", 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.5 }
    );

    // Initial load for SVG drawing
    gsap.fromTo(".hero-svg-path",
      { strokeDasharray: 4000, strokeDashoffset: 4000 },
      { strokeDashoffset: 0, duration: 3, ease: "power3.inOut", stagger: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-[100vh] bg-void overflow-hidden flex flex-col justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        muted
        playsInline
        loop
        autoPlay
        src="https://videos.pexels.com/video-files/3893593/3893593-hd_1920_1080_24fps.mp4"
      />
      
      {/* Abstract SVG Background with Circling Scroll */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <g className="parallax-layer-1 circle-scroll">
             <circle cx="500" cy="500" r="350" fill="none" stroke="var(--color-gold)" strokeWidth="1" strokeDasharray="10 20" />
             <circle className="hero-svg-path" cx="500" cy="500" r="300" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
             <path className="hero-svg-path" d="M200,500 L800,500" fill="none" stroke="var(--color-cream-20)" strokeWidth="1" />
             <path className="hero-svg-path" d="M500,200 L500,800" fill="none" stroke="var(--color-cream-20)" strokeWidth="1" />
          </g>
          <g className="parallax-layer-2">
             <circle className="hero-svg-path" cx="500" cy="500" r="450" fill="none" stroke="var(--color-crimson)" strokeWidth="0.5" />
             <rect className="hero-svg-path" x="150" y="150" width="700" height="700" fill="none" stroke="var(--color-cream-10)" strokeWidth="0.5" transform="rotate(45 500 500)" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 px-[24px] md:px-[80px]">
        {/* TEXT CONTENT */}
        <div className="overflow-hidden pb-2">
          <div className="hero-text-line font-cormorant italic text-[var(--fs-h2)] text-cream-50 leading-none">
            Since the night
          </div>
        </div>
        <div className="overflow-hidden pb-4">
          <div className="hero-text-line font-chunky text-[var(--fs-hero)] text-cream tracking-tight leading-[0.85]">
            RAYYANS
          </div>
        </div>
        <div className="overflow-hidden pb-2">
          <div className="hero-text-line font-cormorant italic text-[var(--fs-h2)] text-cream-50 leading-none">
            has fed this city.
          </div>
        </div>

        <div className="hero-text-line mt-[48px] flex flex-col sm:flex-row gap-[16px]">
          <button className="liquid-metal-btn font-sans font-medium text-[14px] tracking-[0.1em] uppercase px-[32px] py-[20px]">
            EXPLORE MENU
          </button>
          <button className="liquid-glass font-sans text-[14px] text-cream tracking-[0.1em] uppercase px-[32px] py-[20px] hover:bg-cream-10 transition-colors duration-250">
            OUR STORY
          </button>
        </div>
      </div>
      
      {/* BOTTOM EDGE BLEND GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-b from-transparent to-void pointer-events-none z-10" />
    </div>
  );
}
