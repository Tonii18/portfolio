import Bio from "@/app/about/components/bio";
import Skills from "@/app/about/components/skills";
import SkillsCloud from "@/app/about/components/skillsCloud";
import Career from "./components/career";
import DownloadCV from "./components/download-cv";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about my background, skills and career.",
}

export default function AboutPage() {
    return (
        <main>
            <Bio />
            <Skills />
            <Career />
            <DownloadCV />
        </main>
    );
}