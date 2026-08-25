export function Footer() {
  return (
    <footer className="bg-void border-t border-cream-06 px-[24px] md:px-[80px] pt-[80px] pb-[48px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-[28px] text-cream tracking-[-0.01em] leading-none">
              RAYYANS
            </div>
            <div className="font-sans font-light text-[10px] text-cream-20 tracking-[0.15em] mt-2">
              F-8 · ISLAMABAD
            </div>
            <div className="mt-[32px] font-sans font-light text-[13px] text-cream-20 leading-[1.8] max-w-[240px]">
              Since Faisal Ikram opened the fryers in 2001, nothing has changed except the year.
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col">
            {["Menu", "Our Story", "Deals", "Find Us"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="font-sans font-light text-[13px] text-cream-20 leading-[2.2] hover:text-cream transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div className="font-sans text-[10px] text-cream-20 tracking-[0.2em] mb-[16px]">
              GET IN TOUCH
            </div>
            <a href="tel:+92512855496" className="font-sans font-light text-[15px] text-cream hover:text-crimson transition-colors duration-200 mb-[8px]">
              +92 51 2855496
            </a>
            <div className="font-sans font-light text-[13px] text-cream-20 mb-[8px]">
              12:00 PM – 1:00 AM
            </div>
            <div className="font-sans font-light text-[13px] text-cream-20">
              Daily · 7 Days
            </div>
          </div>
        </div>

        {/* RULED LINE */}
        <div className="w-full h-[1px] bg-cream-06 mt-[48px] mb-[32px]" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="font-sans text-[11px] text-cream-10 tracking-[0.04em]">
            © 2025 Rayyans Fast Food. Family-owned. All rights reserved.
          </div>
          <div className="font-cormorant italic text-[15px] text-cream-20">
            Islamabad's own.
          </div>
        </div>
      </div>

      {/* LARGE BACKGROUND WATERMARK */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden text-center pointer-events-none select-none z-0">
        <div className="font-serif font-black text-[120px] md:text-[200px] text-cream opacity-[0.015] leading-none translate-y-1/4">
          RAYYANS
        </div>
      </div>
    </footer>
  );
}
