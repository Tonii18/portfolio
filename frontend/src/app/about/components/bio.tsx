export default function Bio() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
                About Me
            </h2>

            <div className="space-y-6 text-base md:text-lg text-[#B9B9B9] leading-relaxed">
                <p>
                    Hi! I&apos;m <b className="text-white">Antonio</b>, though in the dev community I go by{" "}
                    <span className="font-bold bg-linear-to-r from-[#00F5FF] to-[#39FF14] bg-clip-text text-transparent">
                        Tony
                    </span>.
                </p>

                <p>
                    I am a <b className="text-white">Junior Software Developer</b> focused primarily on <b className="text-white">backend</b> development,
                    though I am also trained in—and enjoy—building full-stack mobile applications
                    using <b className="text-white">Flutter</b>.
                </p>

                <p>
                    Recently, I completed a 3-month software development internship in{" "}
                    <span className="font-semibold text-white">Helsinki</span>, gaining hands-on experience
                    in an <b className="text-white">international environment</b>. My professional English skills (<b className="text-white">B2+</b>,
                    currently preparing for the <b className="text-white">C1 Advanced certification</b> ) allow me to
                    communicate <b className="text-white">fluently</b> and collaborate seamlessly within <b className="text-white">global teams</b>.
                </p>

                <p>
                    I am defined by a curious, multidisciplinary mindset; I dedicate part of
                    my free time to <b className="text-white">UI/UX design</b>, which gives me a holistic perspective when
                    integrating business logic with <b className="text-white">functional, intuitive interfaces</b>.
                </p>

                <p>
                    I am currently seeking my first professional opportunity to join a
                    <b className="text-white"> dynamic team</b>, contribute a <b className="text-white">solid coding foundation</b>, and continue <b className="text-white">growing </b>
                     as a professional.
                </p>
            </div>
        </section>
    );
}