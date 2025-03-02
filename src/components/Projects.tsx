import { useState, useEffect } from 'react';
import { getRandomNeonColor } from '../utils/colors.ts';
import {projectsData} from "../data/data.ts";

export default function Projects() {
    const [colors, setColors] = useState<Record<number, string>>({});
    const [glitchIndex, setGlitchIndex] = useState<number | null>(null);

    // Assign a random color to each project when component mounts
    useEffect(() => {
        const projectColors: {[key: number]: string} = {};
        projectsData.forEach(project => {
            projectColors[project.id] = getRandomNeonColor();
        });
        setColors(projectColors);

        // Simulate random glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchIndex(Math.floor(Math.random() * projectsData.length));
            setTimeout(() => setGlitchIndex(null), 200);
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <section className="py-16 px-4 bg-black relative overflow-hidden">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                     backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
                     backgroundSize: "20px 20px",
                     backgroundColor: "#111",
                     perspective: "1000px",
                     transform: "rotateX(45deg) scale(2)",
                     backgroundPosition: "center"
                 }}>
            </div>

            {/* Animated Scan Line */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="h-1 bg-cyan-400 opacity-30 w-full absolute animate-scan"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-2 glitch-text relative"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF"
                        }}>
                        PROJECTS_MANIFEST
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bg-gray-900 border-2 rounded overflow-hidden relative transition-all duration-500 transform ${glitchIndex === index ? 'glitch-effect scale-105' : 'hover:scale-105'}`}
                            style={{
                                borderColor: colors[project.id] || '#00FFFF',
                                boxShadow: `0 0 15px ${colors[project.id] || '#00FFFF'}`,
                                clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)"
                            }}
                        >
                            {/* Diagonal Corner Slash */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 transform rotate-45 translate-x-10 -translate-y-10"
                                style={{
                                    backgroundColor: colors[project.id] || '#00FFFF',
                                    opacity: 0.3
                                }}
                            ></div>

                            {/* Status Indicator Dot */}
                            <div className="absolute top-3 right-3 flex items-center z-10">
                                <div className="w-2 h-2 rounded-full mr-2 animate-pulse"
                                     style={{ backgroundColor: colors[project.id] || '#00FFFF' }}></div>
                                <span
                                    className="text-xs uppercase tracking-widest"
                                    style={{ color: colors[project.id] || '#00FFFF' }}
                                >
                                    {project.status}
                                </span>
                            </div>

                            <div className="h-48 bg-gray-800 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover filter contrast-125 brightness-75"
                                />
                                <div
                                    className="absolute inset-0 opacity-40"
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                            </div>

                            <div className="p-6 relative">
                                <h3
                                    className="text-xl font-bold mb-2 tracking-widest"
                                    style={{
                                        color: colors[project.id] || '#00FFFF',
                                        fontFamily: "'Orbitron', sans-serif",
                                        textShadow: `0 0 5px ${colors[project.id] || '#00FFFF'}`
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs rounded border"
                                                style={{
                                                    color: colors[project.id] || '#00FFFF',
                                                    borderColor: colors[project.id] || '#00FFFF',
                                                    backgroundColor: 'rgba(0,0,0,0.3)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group"
                                        >
                                            <span
                                                className="absolute inset-0 w-full h-full border border-t-0 border-r-0 border-l-2 border-b-2 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"
                                                style={{ borderColor: colors[project.id] || '#00FFFF' }}
                                            ></span>
                                            <span
                                                className="relative block px-4 py-2 bg-black uppercase tracking-wider text-xs font-bold"
                                                style={{ color: colors[project.id] || '#00FFFF' }}
                                            >
                                                Source_Code
                                            </span>
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group"
                                        >
                                            <span
                                                className="absolute inset-0 w-full h-full transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"
                                                style={{ backgroundColor: colors[project.id] || '#00FFFF' }}
                                            ></span>
                                            <span
                                                className="relative block px-4 py-2 bg-black uppercase tracking-wider text-xs font-bold"
                                                style={{ color: colors[project.id] || '#00FFFF' }}
                                            >
                                                Execute
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Circuit-like decorative line elements */}
                            <div
                                className="absolute bottom-0 left-0 w-1/3 h-px"
                                style={{ backgroundColor: colors[project.id] || '#00FFFF' }}
                            ></div>
                            <div
                                className="absolute top-0 right-0 w-px h-1/4"
                                style={{ backgroundColor: colors[project.id] || '#00FFFF' }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS styles for animation and glitch effects */}
            <style>{`
                @keyframes scanline {
                    0% { top: -10%; }
                    100% { top: 100%; }
                }

                .animate-scan {
                    animation: scanline 3s linear infinite;
                }

                .glitch-effect {
                    animation: glitch 0.2s linear;
                }

                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-5px, 5px); }
                    40% { transform: translate(-5px, -5px); }
                    60% { transform: translate(5px, 5px); }
                    80% { transform: translate(5px, -5px); }
                    100% { transform: translate(0); }
                }
            `}</style>
        </section>
    );
}