import { motion } from "motion/react";

export function FindUs() {
  return (
    <section className="bg-surface w-full overflow-hidden clip-diagonal-top-reverse relative z-30 -mt-[60px]">
      <div className="flex flex-col lg:flex-row w-full min-h-[100vh]">
        {/* LEFT COLUMN 45% */}
        <div className="w-full lg:w-[45%] bg-surface pt-[120px] pb-[80px] px-[24px] md:px-[80px] flex flex-col justify-center">
          <div className="font-sans text-[9px] text-cream-20 tracking-[0.25em] uppercase mb-[24px]">
            WHERE TO FIND US
          </div>

          <div className="flex flex-col">
            <div className="font-serif font-black text-[96px] md:text-[128px] text-cream tracking-[-0.03em] leading-[0.85]">
              F-8
            </div>
            <div className="font-serif font-black text-[72px] md:text-[96px] text-cream tracking-[-0.02em] leading-[0.85]">
              MARKAZ.
            </div>
          </div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[80px] h-[1px] bg-cream-10 my-[48px] origin-left"
          />

          <div className="flex flex-col gap-[24px]">
            {[
              "Shop #33, Al Babar Centre, Park Rd, F-8 Markaz, Islamabad, Pakistan 42000",
              <a href="tel:+92512855496" className="hover:text-cream transition-colors duration-200">+92 51 2855496</a>,
              "12:00 PM – 1:00 AM · Daily · 7 Days a Week",
              "Cash · Debit · Credit · JazzCash · NFC",
              "Delivery: F-6 · F-7 · F-8 · G-6 · G-7 · G-8 · E-7",
              "Also on: Foodpanda · Careem",
              "Free Street Parking Available"
            ].map((text, i) => (
              <div key={i} className="border-t border-cream-06 pt-[20px] font-sans font-light text-[14px] text-cream-20 leading-[1.6]">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN 55% */}
        <div className="w-full lg:w-[55%] min-h-[500px] lg:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1234!2d73.04!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzM2LjAiTiA3M8KwMDInMjQuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px", filter: "grayscale(80%) brightness(0.7) contrast(1.2)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover transition-all duration-300 hover:grayscale-[20%] hover:brightness-[0.85]"
          />
        </div>
      </div>
    </section>
  );
}
