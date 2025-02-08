export const getRandomNeonColor = (): string => {
    const colors = [
        "#FF007F",
        "#00E7FF",
        "#39FF14",
        "#EAFF00",
        "#FF00FF",
        "#00FF00",
        "#00FFFF",
        "#FF1493",
        "#FF8C00",
        "#8A2BE2",
        "#00FA9A",
        "#7FFF00",
        "#FF69B4",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};
