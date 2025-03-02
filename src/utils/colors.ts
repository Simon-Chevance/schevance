export const neonColors = [
    "#FF69B4",
    "#FF007F",
    "#FF1493",
    "#FF00FF",
    "#8A2BE2",
    "#00FFFF",
    "#00E7FF",
    "#00FA9A",
    "#39FF14",
    "#00FF00",
    "#7FFF00",
    "#EAFF00",
    "#FF8C00",
];

// Function to get a random neon color
export const getRandomNeonColor = () => {
    return neonColors[Math.floor(Math.random() * neonColors.length)];
};

// Function to get a specific neon color by index
export const getNeonColor = (index: number) => {
    return neonColors[index % neonColors.length];
};

// Additional color utilities
export const darkenColor = (color: string, amount: number = 0.2) => {
    // Convert hex to RGB
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    // Darken
    r = Math.max(0, Math.floor(r * (1 - amount)));
    g = Math.max(0, Math.floor(g * (1 - amount)));
    b = Math.max(0, Math.floor(b * (1 - amount)));

    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Additional color palettes you might want to use
export const cyberpunkPalettes = {
    neonNights: ['#FF00FF', '#00FFFF', '#FF3300', '#FFFF00', '#33FF00'],
    cyberBlues: ['#00FFFF', '#0088FF', '#0033FF', '#00DDFF', '#00AADD'],
    hackerGreen: ['#00FF00', '#33FF33', '#66FF66', '#99FF99', '#CCFFCC'],
    syntheticRed: ['#FF0000', '#FF3333', '#FF6666', '#FF9999', '#FFCCCC'],
    virtualPurple: ['#8A2BE2', '#9933FF', '#AA55FF', '#BB77FF', '#CC99FF']
};