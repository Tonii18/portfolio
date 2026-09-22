import Image from "next/image";

type Tech = {
    name: string;
}

type Project = {
    icon: string;
    name: string;
    subtitle: string;
    description: string;
    technologies: Tech[];
    image: string;
    linkToGithub: string;
}

const myProjects: Project[] = [
    {
        icon: "/profile-pic.jpeg",
        name: "Portfolio",
        subtitle: "My resumen as a Junior Software Developer",
        description: "This junior developer portfolio serves as a comprehensive showcase of my technical background, career journey, and practical capabilities, designed to highlight my growth and readiness for industry roles.",
        technologies: [
            { name: "Next.js" },
            { name: "React" },
            { name: "Tailwind" },
            { name: "Vercel" },
        ],
        image: "/portfolio-mockup.png",
        linkToGithub: "https://github.com/Tonii18/portfolio.git"
    },
    {
        icon: "/zenit-icon.svg",
        name: "Zenit",
        subtitle: "Your All in One Health & Wellness Companion",
        description: "Zenit is a comprehensive mobile application designed to help users track and improve their overall physical and mental well-being, guiding them toward an optimal state of health. Everything you need to reach your peak health is brought together in one place.",
        technologies: [
            { name: "Flutter" },
            { name: "Java" },
            { name: "Spring" },
            { name: "Render" },
            { name: "PostgreSQL" },
        ],
        image: "/zenit-mockup.png",
        linkToGithub: "https://github.com/Tonii18/zenit-backend.git"
    },
    {
        icon: "/bolt-icon.svg",
        name: "Bolt",
        subtitle: "Projects Managment",
        description: "Bolt is a mobile project management app that enables admins to create projects and onboard team members. Users can manage, track, and collaborate on tasks seamlessly in one place.",
        technologies: [
            { name: "Flutter" },
            { name: "Java" },
            { name: "Spring" },
            { name: "Render" },
            { name: "PostgreSQL" },
        ],
        image: "/bolt-mockup.png",
        linkToGithub: "https://github.com/Tonii18/Bolt-Backend.git"
    }
];

export default function Project() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-[#F3F4F6]">
                Featured Projects
            </h2>

            <p className="text-sm text-[#B9B9B9] mb-10">You can view the GitHub repository of each project by clicking on its icon image</p>

            <div className="space-y-12">
                {myProjects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-[#161F30] p-5 rounded-2xl hover:bg-[#1d263a] transition-all border-l-2"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">

                            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                                <a href={project.linkToGithub} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={project.icon}
                                        alt={`${project.name} icon`}
                                        fill
                                        className="object-cover"
                                    />
                                </a>
                            </div>

                            <div className="relative w-full sm:w-2/5 aspect-square rounded-xl overflow-hidden shrink-0">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-between flex-1 self-stretch">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#F3F4F6]">
                                        {project.name}{" — "}{project.subtitle}
                                    </h3>
                                    <p className="text-[#B9B9B9] mt-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-6">
                                    {project.technologies.map((tech) => (
                                        <div key={tech.name} className="flex">
                                            <span className="bg-[#00F5FF]/30 text-xs text-[#F3F4F6] rounded-full px-3 py-1.5 text-center w-full truncate transition-all hover:bg-[#00F5FF]/40">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}