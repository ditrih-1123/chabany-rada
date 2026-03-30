import { HomeHero } from "@/components/home-hero";
import { HomeMainColumns } from "@/components/home-main-columns";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <HomeHero />
      <HomeMainColumns />
    </main>
  );
}
