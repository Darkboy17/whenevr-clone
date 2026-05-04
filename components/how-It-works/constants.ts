export const framerAssets = {
    logoMark:
        "https://framerusercontent.com/images/qiSLj1RGONCas5NX09DpPtZlwU.png",
    folderMask:
        "https://framerusercontent.com/images/u6NHrizsQWk4u5sqIM2DGhO2EI.svg",
    receive: [
        "https://framerusercontent.com/images/FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg?scale-down-to=512",
        "https://framerusercontent.com/images/MRXSykppVewwilGAfSKu7eZdgg.jpg?scale-down-to=512",
        "https://framerusercontent.com/images/ebwTJIBeD2MM3iPO4JB6BPWF8.jpg?scale-down-to=512",
    ],
} as const;

/**
 * Service rows are separated from the marquee component so the animation
 * content can be adjusted without touching layout logic.
 */
export const serviceRows = [
    [
        ["Social Graphics", 158.5],
        ["UX Design", 117],
        ["Pitch Decks", 127],
        ["Branding", 105.5],
    ],
    [
        ["Blog Graphics", 145],
        ["Landing Pages", 152.5],
        ["Illustrations", 125],
        ["Product Design", 155.5],
        ["Email Design", 136],
    ],
    [
        ["UI Design", 109],
        ["App Design", 125.5],
        ["Style Guides", 133.5],
        ["Icon Design", 126.5],
        ["Ad Creatives", 135.5],
    ],
] as const;