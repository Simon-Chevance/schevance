import { technologies } from '../constants';
import React from "react"

export default function Skills() {
    return (
        <div className="flex flex-col justify-center w-full px-4">
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-2 glitch-text relative"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF"
                        }}>
                        SKILLS
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1 sm:gap-3 md:gap-4 justify-center">
                {technologies.map((technology) => {
                    const IconComponent = technology.icon as React.FC<{ height: number; width: number; className?: string }>;
                    return (
                        <div
                            key={technology.label}
                            className="hover:bg-[#00454c] cursor-pointer flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-md transition duration-300"
                        >
                            <IconComponent height={32} width={32} className="sm:h-10 sm:w-10 md:h-12 md:w-12"/>

                            <p className="text-[10px] sm:text-xs md:text-sm neon-blue-shadow pt-1 sm:pt-2">
                                {technology.label.toUpperCase()}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
