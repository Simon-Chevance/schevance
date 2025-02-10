export const getRandomNeonColor = (): string => {
    const colors = [
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
    return colors[Math.floor(Math.random() * colors.length)];
};
