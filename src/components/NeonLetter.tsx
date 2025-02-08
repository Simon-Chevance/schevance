import React from 'react';

interface NeonLetterProps {
    char: string;
    color: string;
}

const NeonLetter: React.FC<NeonLetterProps> = ({ char, color }) => {
    return (
        <span
            className="p-1 transition-all duration-300"
            style={{
                color: color,
                backgroundColor: "transparent",
                textShadow:
                    color !== "black"
                        ? `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`
                        : "none",
            }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    );
};

export default NeonLetter;
