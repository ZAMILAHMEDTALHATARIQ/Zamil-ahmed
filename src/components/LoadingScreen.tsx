import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 5-10 seconds loading screen as requested (let's do 5.5s so it doesn't annoy too much)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-void flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Liquid glass floating elements in background */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60vw] h-[60vw] rounded-full border border-cream-10 opacity-20 -top-[20%] -left-[10%]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[40vw] h-[40vw] rounded-full border border-crimson-30 opacity-20 -bottom-[10%] -right-[10%]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center liquid-glass p-8 md:p-16 rounded-xl"
          >
            <div className="w-16 h-16 border-t-2 border-r-2 border-crimson rounded-full animate-spin mb-8" />
            <div className="font-chunky text-[48px] md:text-[64px] text-cream leading-none tracking-wide mb-4">
              COOKING UP
            </div>
            <div className="font-serif italic text-[32px] md:text-[48px] text-gold leading-none mb-6">
              something delicious
            </div>
            <div className="font-sans text-[12px] text-cream-40 tracking-[0.2em] uppercase">
              Please wait while we prepare the experience...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
