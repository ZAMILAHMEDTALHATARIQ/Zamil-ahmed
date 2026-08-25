import { motion } from "motion/react";
import { FloatingSVG } from "./FloatingSVG";

export function Heritage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <section className="bg-void py-[80px] md:py-[160px] relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
          muted
          playsInline
          loop
          autoPlay
          src="https://videos.pexels.com/video-files/5535359/5535359-uhd_2560_1440_25fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/50 to-void opacity-90" />
      </div>

      <FloatingSVG yOffset={250} rotation={-45}>
        <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-40 stroke-[var(--color-crimson)]">
          <circle cx="200" cy="200" r="180" fill="none" strokeWidth="0.5" />
          <path d="M0,200 L400,200" strokeWidth="1" />
        </svg>
      </FloatingSVG>

      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] flex flex-col md:flex-row md:gap-4 relative z-10">
        
        {/* LEFT COLUMN 30% */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[30%] flex flex-col md:items-start mb-[80px] md:mb-0 relative"
        >
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left font-sans text-[10px] text-cream-20 tracking-[0.2em] whitespace-nowrap">
            FAMILY · EST. 2001
          </div>
          <div className="md:ml-[64px] flex flex-col items-start h-full">
            <div className="w-[1px] h-[60px] md:h-[120px] bg-crimson mb-6 md:mb-12" />
            <div className="font-cormorant text-[32px] md:text-[48px] text-cream-40">01</div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN 70% */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-[70%] flex flex-col"
        >
          <div className="flex flex-col tracking-[-0.02em]">
            <motion.div variants={itemVariants} className="font-cormorant italic text-[clamp(2.5rem,6vw,4rem)] text-cream leading-[0.9]">
              The family
            </motion.div>
            <motion.div variants={itemVariants} className="font-cormorant italic text-[clamp(2.5rem,6vw,4rem)] text-cream leading-[0.9]">
              that never
            </motion.div>
            <motion.div variants={itemVariants} className="font-chunky text-[clamp(3rem,8vw,6rem)] text-cream leading-[0.9] uppercase mt-2">
              left F-8.
            </motion.div>
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full h-[1px] bg-cream-10 mt-[48px] origin-left" 
          />

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-[32px] font-sans text-[var(--fs-body)] text-cream-50 leading-[1.8] md:columns-2 gap-[48px] liquid-glass p-8 md:p-12 rounded-xl"
          >
            <p>
              Faisal Ikram opened Rayyans in 2001 with one conviction: that Islamabad deserved fast food made with the patience of a home kitchen. No franchise. No investor pressure. No shortcuts on the recipe.
            </p>
            <p className="mt-4 md:mt-0">
              The chicken marinates for 12 to 14 hours before a single piece is fried. It has always been this way. It will always be this way. F-8 Markaz. Shop 33. The same address for 23 years.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-[48px] flex flex-col sm:flex-row gap-[16px] md:gap-[48px]"
          >
            {/* Stat Box 1 */}
            <div className="border border-cream-10 p-[24px] md:px-[32px] inline-flex items-center gap-[12px] liquid-glass">
              <div className="font-accent font-bold text-[32px] md:text-[48px] text-cream leading-none">
                23<span className="font-serif text-[24px] md:text-[32px] text-crimson ml-1">+</span>
              </div>
              <div className="font-sans text-[10px] text-cream tracking-[0.15em] uppercase w-min">
                YEARS IN ISLAMABAD
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="border border-cream-10 p-[24px] md:px-[32px] inline-flex items-center gap-[12px] liquid-glass">
              <div className="font-accent font-bold text-[32px] md:text-[48px] text-gold leading-none">
                4.4<span className="text-[24px] md:text-[32px] text-gold ml-1">★</span>
              </div>
              <div className="font-sans text-[10px] text-cream tracking-[0.15em] uppercase w-min">
                540+ GOOGLE REVIEWS
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
