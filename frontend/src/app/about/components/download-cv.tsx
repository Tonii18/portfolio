import Link from "next/link";

export default function DownloadCV() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
            <Link
                href="/Software Developer - CV English.pdf"
                download={"Software Developer - CV English.pdf"}
                className="inline-block mt-10 px-6 py-3 border border-transparent [border-image:linear-gradient(to_right,#00F5FF,#39FF14)_1] rounded-xs font-medium transition duration-300 hover:bg-linear-to-r hover:from-[#00F5FF] hover:to-[#39FF14] hover:text-[#0F172A]"
            >
                Download my CV
            </Link>
        </section>
    );
}