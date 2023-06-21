import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "symbols",
            assets: {
                H1: "./symbols/H1.png",
                H2: "./symbols/H2.png",
                H3: "./symbols/H3.png",
                H4: "./symbols/H4.png",
                L1: "./symbols/L1.png",
                L2: "./symbols/L2.png",
                L3: "./symbols/L3.png",
                L4: "./symbols/L4.png",
                WILD: "./symbols/WILD.png",
            },
        },
        {
            name: "board",
            assets: {
                button_spin: "./button_spin.png",
                counter: "./counter.png",
                BG: "./bg.jpg",
                reels: "./reels.png",
            },
        },
    ],
};
