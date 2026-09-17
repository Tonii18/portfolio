"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact me" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full backdrop-blur sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="font-bold text-lg" onClick={() => setIsOpen(false)}>
                    <div className="relative w-15 h-15 rounded-full overflow-hidden border-2 border-transparent transition-all duration-300">
                        <Image src="/profile-pic.jpeg" alt="Antonio Jesús Sánchez Rosales" fill className="object-cover" />
                    </div>
                </Link>

                {/* Links - desktop */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-lg transition-all duration-300 hover:bg-linear-to-r hover:from-[#00F5FF] hover:to-[#39FF14] hover:bg-clip-text hover:text-transparent"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Burguer button - mobile */}
                <button
                    className="flex md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Dropdown - mobile */}
            {isOpen && (
                <ul className="flex flex-col md:hidden px-6 pb-4 gap-4 text-base font-medium">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block transition-all duration-300 hover:bg-linear-to-r hover:from-[#00F5FF] hover:to-[#39FF14] hover:bg-clip-text hover:text-transparent"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}