import Project from "./components/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Discover my works so far and how I did them."
}

export default function Projects() {
    return (
        <main>
            <Project />
        </main>
    );
}