import { motion, useScroll, useTransform } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading, signIn, signOut } = useAuth();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Story", path: "/story" },
  ];

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.92)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-[64px] z-[40000] px-6 md:px-[80px] flex items-center justify-between"
      >
        {/* LEFT ZONE */}
        <div className="flex flex-col">
          <Link to="/" className="font-serif font-bold text-[18px] text-cream tracking-[0.02em] leading-none">RAYYANS</Link>
          <div className="font-sans font-light text-[9px] text-cream-20 tracking-[0.2em] leading-none mt-1">F — 8</div>
        </div>

        {/* CENTER ZONE (desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <Link to={item.path} className="font-sans text-[11px] tracking-[0.1em] text-cream-20 hover:text-cream transition-colors duration-200 uppercase">
                {item.label}
              </Link>
              <span className="text-cream-20 mx-6 text-[11px]">·</span>
            </div>
          ))}
          <div className="flex items-center">
            {!loading && (
              <button 
                onClick={user ? signOut : signIn} 
                className="font-sans text-[11px] tracking-[0.1em] text-cream-20 hover:text-cream transition-colors duration-200 uppercase"
              >
                {user ? "Sign Out" : "Sign In"}
              </button>
            )}
          </div>
        </div>

        {/* RIGHT ZONE */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="h-[44px] px-[32px] border border-crimson text-crimson font-sans text-[12px] tracking-[0.1em] uppercase hover:bg-crimson hover:text-cream transition-colors duration-250 ease-out">
            ORDER NOW
          </button>
          <button className="w-[44px] h-[44px] border border-cream-20 flex items-center justify-center text-cream hover:border-cream-50 transition-colors duration-250">
            <Phone size={18} />
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="h-[44px] px-[24px] border border-[rgba(237,232,224,0.25)] text-cream font-sans text-[13px] tracking-[0.08em] uppercase hover:border-cream transition-colors duration-250 ease-out"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-void z-[10000] flex flex-col justify-center items-center"
        >
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 flex items-center gap-2 font-sans text-[11px] text-cream-20 tracking-[0.2em] uppercase"
          >
            <X size={14} /> CLOSE
          </button>
          <div className="flex flex-col items-center gap-8">
            {["MENU", "STORY", "DEALS", "FIND US"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.5, ease: "easeOut" }}
                className="font-serif font-bold text-[72px] text-cream leading-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 font-sans text-[13px] text-cream-20"
          >
            +92 51 2855496
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
