import React, { useState } from 'react';
import { getRandomNeonColor } from '../utils/neonColors';
import NeonLetter from './NeonLetter';

interface NeonTitleProps {
    word: string;
}

const NeonTitle: React.FC<NeonTitleProps> = ({ word }) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [hoverColor, setHoverColor] = useState<string>('black');

    const handleMouseEnter = () => {
        setHovered(true);
        setHoverColor(getRandomNeonColor());
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="text-3xl font-bold flex space-x-1">
                {word.split("").map((char, index) => (
                    <NeonLetter key={index} char={char} color={hovered ? hoverColor : "black"} />
                ))}
            </h1>
        </div>
    );
};

export default NeonTitle;
