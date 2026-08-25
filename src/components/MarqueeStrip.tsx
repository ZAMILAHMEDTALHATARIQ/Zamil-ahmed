export function MarqueeStrip() {
  return (
    <div className="w-full h-[48px] bg-surface border-t border-b border-cream-06 flex items-center overflow-hidden">
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center font-sans text-[11px] tracking-[0.12em] text-cream-20 uppercase">
            <span className="text-gold mx-4">★</span>
            HESPER BURGER — RS. 650
            <span className="mx-4">·</span>
            <span className="text-gold mx-4">★</span>
            OPEN TILL 1:00 AM
            <span className="mx-4">·</span>
            <span className="text-gold mx-4">★</span>
            4.4 STARS · 540+ REVIEWS
            <span className="mx-4">·</span>
            <span className="text-gold mx-4">★</span>
            FAMILY OWNED SINCE 2001
            <span className="mx-4">·</span>
            <span className="text-gold mx-4">★</span>
            FREE PARKING · F-8 MARKAZ
            <span className="mx-4">·</span>
            <span className="text-gold mx-4">★</span>
            LATE NIGHT DISCOUNT AFTER 10:30 PM
            <span className="mx-4">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
