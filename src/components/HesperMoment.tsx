import { motion } from "motion/react";

export function HesperMoment() {
  return (
    <section className="bg-surface w-full overflow-hidden clip-diagonal-top relative z-20 -mt-[60px]">
      <div className="flex flex-col lg:flex-row w-full min-h-[100vh]">
        {/* LEFT ZONE 65% */}
        <div className="w-full lg:w-[65%] bg-surface pt-[120px] pb-[80px] px-[24px] md:px-[80px] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[10px] text-cream-20 tracking-[0.2em] uppercase"
          >
            SIGNATURE · HESPER BURGER · RS. 650
          </motion.div>

          <div className="mt-[24px] flex flex-col tracking-[-0.04em]">
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-cormorant italic text-[48px] md:text-[64px] text-cream-20 leading-none"
            >
              THE
            </motion.div>
            <motion.div 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif font-black text-[72px] md:text-[160px] text-cream leading-[0.85]"
            >
              HESPER
            </motion.div>
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[120px] h-[1px] bg-cream-20 mt-[40px] origin-left"
          />

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-[40px] font-sans text-[16px] text-cream-20 leading-[1.9] max-w-[400px]"
          >
            The burger that built the legend.<br />
            Chicken patty. Special Hesper sauce.<br />
            Made fresh. Every single order.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-[48px] flex items-baseline gap-2"
          >
            <span className="font-sans text-[18px] text-cream-20">RS.</span>
            <span className="font-accent font-bold text-[64px] text-gold leading-none">650</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-[40px] flex flex-col sm:flex-row gap-[16px]"
          >
            <button className="bg-cream text-void font-sans font-medium text-[12px] tracking-[0.1em] uppercase px-[32px] py-[16px] hover:bg-crimson hover:text-cream transition-all duration-250 ease-out">
              ORDER NOW
            </button>
            <button className="flex items-center justify-center gap-[16px] bg-transparent text-cream border border-[rgba(237,232,224,0.25)] font-sans text-[12px] tracking-[0.1em] uppercase px-[32px] py-[16px] hover:border-cream hover:text-cream transition-colors duration-250 ease-out">
              SEE FULL MENU
            </button>
          </motion.div>
        </div>

        {/* RIGHT ZONE 35% */}
        <div className="w-full lg:w-[35%] min-h-[50vh] lg:min-h-full relative overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img 
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=1200" 
              alt="The Hesper Burger"
              className="w-full h-full object-cover rounded-none"
            />
            {/* INNER FRAME OVERLAY */}
            <div className="absolute inset-[16px] pointer-events-none shadow-[inset_0_0_0_1px_rgba(237,232,224,0.15)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
