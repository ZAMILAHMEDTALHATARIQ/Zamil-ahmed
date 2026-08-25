import { Heritage } from "../components/Heritage";
import { motion } from "motion/react";

export function Story() {
  return (
    <main className="flex flex-col min-h-screen bg-void w-full pt-[120px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto text-center"
      >
        <h1 className="font-chunky text-[clamp(4rem,10vw,8rem)] text-cream uppercase">OUR STORY</h1>
        <div className="w-[100px] h-[2px] bg-crimson mx-auto my-8" />
      </motion.div>
      <Heritage />
    </main>
  );
}
