import Hero from "@/components/hero";
import Image from "next/image";
import SkillsCloud from "./about/components/skillsCloud";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsCloud />
    </main>
  );
}
