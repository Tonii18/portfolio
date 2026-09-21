import Link from "next/link";

export default function ContactHero() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-20 text-center">
            <p className="text-xl text-700 leading-relaxed">
                Let&apos;s make something great
            </p>
            <p className="text-4xl font-bold leading-relaxed mt-2">
                Contact me
            </p>
            <p className="text-3xl text-700 font-extrabold leading-relaxed mt-10">
                Do you have a <span className="bg-linear-to-r from-[#00F5FF] to-[#39FF14] bg-clip-text text-transparent">project in mind</span> or you are looking to <span className="bg-linear-to-r from-[#00F5FF] to-[#39FF14] bg-clip-text text-transparent">add talent</span> to your team?
            </p>
            <p className="text-lg text-700 leading-relaxed mt-10">
                I am available for freelance projects as a Full-stack / Mobile developer or to join teams on a full-time basis.
            </p>
        </section>
    );
}