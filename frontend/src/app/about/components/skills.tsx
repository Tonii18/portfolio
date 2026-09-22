import {
    SiFlutter,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiSpringboot,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiFigma,
    SiPostman,
    SiRender,
    SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "Flutter", icon: SiFlutter },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Next.js", icon: SiNextdotjs },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Python", icon: SiPython },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
    },
    {
        title: "Tools and Deployment",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Figma", icon: SiFigma },
            { name: "Postman", icon: SiPostman },
            { name: "Render", icon: SiRender },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

export default function Skills() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-[#F3F4F6]">Skills</h2>

            <div className="space-y-12">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-lg font-semibold text-[#B9B9B9] mb-4">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#F3F4F6]-200 transition-all duration-300 hover:scale-105 hover:border-[#00F5FF] hover:shadow-[0_0_15px_-3px_#39FF14] bg-sky-950"
                                >
                                    <skill.icon size={32} />
                                    <span className="text-xs text-center text-[#F3F4F6]-600">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}