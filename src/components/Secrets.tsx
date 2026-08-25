import { motion } from "motion/react";
import { FloatingSVG } from "./FloatingSVG";

export function Secrets() {
  return (
    <section className="bg-void w-full min-h-[100vh] relative overflow-hidden flex flex-col items-center justify-center py-[120px]">
      {/* NOISE & GLOW */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          muted
          playsInline
          loop
          autoPlay
          src="https://videos.pexels.com/video-files/3206001/3206001-uhd_2560_1440_25fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/50 to-void" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,0,0,0.1)_0%,transparent_70%)]" />
      </div>

      <FloatingSVG yOffset={300} rotation={90}>
        <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-20 stroke-[var(--color-gold)]">
          <circle cx="300" cy="300" r="280" fill="none" strokeWidth="2" strokeDasharray="10 20" />
          <path d="M0,300 L600,300" strokeWidth="1" />
        </svg>
      </FloatingSVG>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[14px] md:text-[18px] text-cream-50 tracking-[0.4em] uppercase mb-8"
        >
          THE LEGACY CONTINUES
        </motion.div>

        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="font-chunky text-[clamp(4rem,10vw,8rem)] text-cream leading-[0.85] tracking-tight uppercase"
        >
          60 YEARS' WORTH
        </motion.div>
        
        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif italic text-[clamp(3rem,8vw,6rem)] text-gold leading-none my-4"
        >
          of secrets
        </motion.div>

        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="font-chunky text-[clamp(4rem,10vw,8rem)] text-cream leading-[0.85] tracking-tight uppercase"
        >
          INTO A BURGER.
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-[200px] md:w-[400px] h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent my-[64px]"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="liquid-glass p-8 md:p-12 max-w-[800px] rounded-xl"
        >
          <p className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] text-cream leading-[1.8]">
            We didn't just build a menu; we engineered an experience. Every patty is crafted with a proprietary blend of spices that have been guarded for over half a century. When you bite into a Rayyans burger, you aren't just tasting fast food—you're tasting history.
          </p>
          <button className="liquid-metal-btn mt-8 px-10 py-4 font-sans text-[14px] tracking-[0.2em] uppercase">
            TASTE THE LEGACY
          </button>
        </motion.div>
      </div>
    </section>
  );
}
