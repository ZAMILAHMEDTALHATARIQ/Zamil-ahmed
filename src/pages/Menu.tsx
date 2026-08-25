import { FeaturedMenu } from "../components/FeaturedMenu";
import { motion } from "motion/react";

export function Menu() {
  return (
    <main className="flex flex-col min-h-screen bg-void w-full pt-[120px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-[24px] md:px-[80px] max-w-[1440px] mx-auto text-center"
      >
        <h1 className="font-chunky text-[clamp(4rem,10vw,8rem)] text-cream uppercase">FULL MENU</h1>
        <div className="w-[100px] h-[2px] bg-gold mx-auto my-8" />
      </motion.div>
      <FeaturedMenu />
    </main>
  );
}
