import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function FloatingSVG({ children, yOffset = 100, rotation = 0 }: { children: ReactNode, yOffset?: number, rotation?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      y: yOffset,
      rotation: rotation,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5 // Added scrub smoothing for "slow-motion"
      }
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="absolute pointer-events-none opacity-30 mix-blend-screen z-0">
      {children}
    </div>
  );
}
