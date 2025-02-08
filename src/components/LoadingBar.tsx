import React, { useState, useEffect } from 'react';

interface LoadingBarProps {
    onComplete?: () => void;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                    return 100;
                }
                return prev + 1;
            });
        }, 13);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="relative w-full h-4 bg-gray-900 rounded overflow-hidden shadow-lg mb-4">
            <div
                style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 10px #00e7ff, 0 0 20px #00e7ff'
                }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-bold">{progress}%</p>
            </div>
        </div>
    );
};

export default LoadingBar;
