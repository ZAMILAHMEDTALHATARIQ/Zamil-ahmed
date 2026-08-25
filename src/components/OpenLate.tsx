import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function OpenLate() {
  const [timeStr, setTimeStr] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format time in PKT
      const formatter = new Intl.DateTimeFormat('en-PK', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Karachi'
      });
      const parts = formatter.formatToParts(now);
      const hour = parts.find(p => p.type === 'hour')?.value;
      const minute = parts.find(p => p.type === 'minute')?.value;
      const dayPeriod = parts.find(p => p.type === 'dayPeriod')?.value;
      
      if (hour && minute && dayPeriod) {
        setTimeStr(`${hour}:${minute} ${dayPeriod.toUpperCase()}`);
      } else {
        // Fallback
        setTimeStr(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      }

      // Check if open (12 PM to 1 AM)
      // PKT time string to get hour
      const hourFormatter = new Intl.DateTimeFormat('en-PK', {
        hour: 'numeric',
        hour12: false,
        timeZone: 'Asia/Karachi'
      });
      const currentHour = parseInt(hourFormatter.format(now), 10);
      setIsOpen(currentHour >= 12 || currentHour === 0);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-void w-full h-[100vh] relative overflow-hidden flex flex-col items-center justify-center">
      {/* NOISE & GLOW */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 60%, rgba(185,28,42,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* CLOCK AREA */}
        <div className="flex flex-col items-center mb-[48px]">
          <div className="font-sans text-[9px] text-cream-10 tracking-[0.2em] mb-2 uppercase">ISLAMABAD TIME</div>
          <div className="font-sans font-light text-[13px] text-cream-20 tracking-[0.2em]">{timeStr || "LOADING..."}</div>
          <div className="mt-4 flex items-center gap-2">
            {isOpen ? (
              <>
                <div className="w-[8px] h-[8px] rounded-full bg-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.5)] animate-pulse" />
                <div className="font-sans text-[11px] text-[#22C55E] tracking-[0.15em] uppercase">OPEN NOW</div>
              </>
            ) : (
              <>
                <div className="w-[8px] h-[8px] rounded-full bg-cream-20" />
                <div className="font-sans text-[11px] text-cream-20 tracking-[0.15em] uppercase">OPENS AT 12:00 PM</div>
              </>
            )}
          </div>
        </div>

        {/* BIG STATEMENT */}
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[13px] text-cream-20 tracking-[0.3em] uppercase mb-4"
          >
            STILL COOKING
          </motion.div>

          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-cormorant italic text-[64px] md:text-[80px] text-cream-20 leading-[0.9]"
          >
            AT
          </motion.div>
          
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif font-black text-[96px] md:text-[200px] text-cream tracking-[-0.04em] leading-[0.85]"
          >
            1:00
          </motion.div>

          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif font-bold text-[48px] md:text-[64px] text-crimson tracking-[-0.02em] leading-none mt-4"
          >
            A.M.
          </motion.div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-[200px] h-[1px] bg-cream-10 my-[48px]"
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-cormorant italic text-[22px] text-cream-20 text-center"
          >
            While KFC closes at 11, we're still at the fryer.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-sans text-[12px] text-gold tracking-[0.05em] mt-[48px] text-center"
          >
            ★ 10–15% Late Night Discount after 10:30 PM
          </motion.div>
        </div>
      </div>
    </section>
  );
}
