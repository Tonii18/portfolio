"use client";

import { useEffect, useState } from "react";

import {
    Cloud,
    fetchSimpleIcons,
    renderSimpleIcon,
    type SimpleIcon,
} from "react-icon-cloud";

const slugs = [
    "flutter",
    "html5",
    "css3",
    "javascript",
    "typescript",
    "nextdotjs",
    "openjdk",
    "springboot",
    "python",
    "mysql",
    "postgresql",
    "git",
    "github",
    "figma",
    "postman",
    "render",
];

export default function SkillsCloud() {
    const [icons, setIcons] = useState<SimpleIcon[] | null>(null);

    useEffect(() => {
        fetchSimpleIcons({ slugs }).then((res) => {
            setIcons(Object.values(res.simpleIcons));
        });
    }, []);

    if (!icons) {
        return (
            <div className="flex items-center justify-center h-64 text-sm text-gray-400">
                Loading...
            </div>
        );
    }

    return (
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 flex justify-center">
            <Cloud
                containerProps={{
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
                options={{
                    reverse: true,
                    depth: 1,
                    wheelZoom: false,
                    imageScale: 2,
                    activeCursor: "default",
                    tooltip: "native",
                    initial: [0.1, -0.1],
                    clickToFront: 500,
                    tooltipDelay: 0,
                    outlineColour: "#0000",
                    maxSpeed: 0.04,
                    minSpeed: 0.02,
                }}
            >
                {icons.map((icon) =>
                    renderSimpleIcon({
                        icon,
                        size: 42,
                        bgHex: "#0f172a",
                        fallbackHex: "#e5e7eb",
                        minContrastRatio: 1.2,
                        aProps: {
                            onClick: (e: React.MouseEvent) => e.preventDefault(),
                        },
                    })
                )}
            </Cloud>
        </section>
    );
}