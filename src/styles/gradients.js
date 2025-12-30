export const mainGradient = {
    colors: [
        "#121D3D", // Top: Dark Royal (The specific 'glow' color)
        "#080B14", // Upper Mid: Fast drop-off to dark navy
        "#020305", // Lower Mid: Almost black
        "#000000", // Bottom: Absolute black
    ],
    // We compress the transition so the glow stays at the top
    locations: [0, 0.2, 0.5, 1],
    start: { x: 0.5, y: 0 }, // Center Top
    end: { x: 0.5, y: 1 },   // Center Bottom
};