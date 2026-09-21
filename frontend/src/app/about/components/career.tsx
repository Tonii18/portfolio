import Skills from "./skills";

type Skill = {
    name: string;
};

type job = {
    title: string;
    company: string;
    duration: string;
    description: string;
    skills: Skill[];
};

const myCareer: job[] = [
    {
        title: "Internship Software Developer",
        company: "Screenful Oy",
        duration: "February 2026 - May 2026",
        description: "Developer specializing in AI integration, QA automation, and GEO (Generative Engine Optimization). Experienced in refining LLM performance via prompt engineering, writing Python/JS scripts for automated testing, and auditing AI communication outputs.",
        skills: [
            {name: "JavaScript"},
            {name: "Python"},
            {name: "Google Cloud"},
            {name: "RAG Engine"},
            {name: "LLMs"},
            {name: "Playwright"},
        ]
    },
];

export default function Career() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-[#F3F4F6]">My Career</h2>

            <div className="space-y-12">
                {myCareer.map((job) => (
                    <div key={job.title} className="bg-[#161F30] p-5 rounded-2xl hover:bg-[#1d263a] transition-all border-l-2">
                        <h3 className="text-lg font-semibold text-[#F3F4F6] mb-4">
                            {job.title}{" - "}{job.company}
                        </h3>

                        <h4 className="text-[#B9B9B9] mb-4">{job.duration}</h4>

                        <p className="text-[#B9B9B9] mb-6">{job.description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                            {job.skills.map((skill) => (
                                <div key={skill.name} className="flex">
                                    <span className="bg-[#00F5FF]/30 text-xs text-[#F3F4F6] rounded-full px-3 py-1.5 text-center w-full truncate transition-all hover:bg-[#00F5FF]/40">
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