import Link from "next/link";

export default function Hero() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-20 text-center">
            <p className="text-xl text-700 leading-relaxed">
                Hi, my name is
            </p>
            <p className="text-xl text-700 font-bold leading-relaxed mt-2">
                Antonio Sánchez
            </p>
            <p className="text-3xl text-700 font-extrabold leading-relaxed mt-10">
                I am a Junior
            </p>
            <p className="text-4xl text-700 font-extrabold leading-relaxed mt-2 bg-linear-to-r from-[#00F5FF] to-[#39FF14] bg-clip-text text-transparent">
                Software Developer
            </p>
            <p className="text-lg text-700 leading-relaxed mt-10">
                Recently graduated as a Higher Technician in Multi-platform Applications Development
            </p>

            <Link
                href="/about"
                className="inline-block mt-10 px-6 py-3 border border-transparent [border-image:linear-gradient(to_right,#00F5FF,#39FF14)_1] rounded-xs font-medium transition duration-300 hover:bg-linear-to-r hover:from-[#00F5FF] hover:to-[#39FF14] hover:text-[#0F172A]"
            >
                Get to know me
            </Link>
        </section>
    );
}