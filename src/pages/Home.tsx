import { Hero } from "../components/Hero";
import { Heritage } from "../components/Heritage";
import { FeaturedMenu } from "../components/FeaturedMenu";
import { Secrets } from "../components/Secrets";

export function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-void w-full">
      <Hero />
      <Secrets />
      <FeaturedMenu />
      <Heritage />
    </main>
  );
}
