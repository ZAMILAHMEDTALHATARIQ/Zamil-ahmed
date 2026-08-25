import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../lib/AuthContext";

export function LoginGate() {
  const { user, loading, signIn } = useAuth();
  const [showGate, setShowGate] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    if (loading || user || hasDismissed) return;

    const handleScroll = () => {
      // Trigger when scrolled down a bit (e.g. past the hero)
      if (window.scrollY > window.innerHeight * 0.8 && !showGate) {
        setShowGate(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [user, loading, hasDismissed, showGate]);

  if (loading || user) return null;

  return (
    <AnimatePresence>
      {showGate && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[50000] bg-void/80 flex flex-col items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="liquid-glass w-full max-w-lg p-10 md:p-14 text-center rounded-2xl flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(229,0,0,0.4)]">
              <span className="font-serif italic text-white text-3xl">R</span>
            </div>
            
            <h2 className="font-chunky text-[32px] md:text-[48px] text-cream leading-none mb-4 tracking-wide">
              ESCAPE THE SYSTEM
            </h2>
            
            <p className="font-sans text-[16px] text-cream-40 mb-10 leading-relaxed">
              If you want to see more or be a part of the system or escape system, log in first so we can message you about anything we found out.
            </p>
            
            <div className="flex flex-col w-full gap-4">
              <button 
                onClick={async () => {
                  await signIn();
                  setShowGate(false);
                }}
                className="liquid-metal-btn w-full py-4 font-sans text-[14px] tracking-[0.1em] uppercase"
              >
                LOG IN TO CONTINUE
              </button>
              
              <button 
                onClick={() => {
                  setShowGate(false);
                  setHasDismissed(true);
                }}
                className="bg-transparent border border-cream-20 text-cream-40 hover:text-cream hover:border-cream w-full py-4 font-sans text-[12px] tracking-[0.1em] uppercase transition-colors"
              >
                MAYBE LATER
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
