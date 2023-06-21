import { Application } from "pixi.js";
import { LoaderScene } from "./utils/LoadeScene";
import gsap from "gsap";

export const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    resizeTo: window,
    backgroundColor: 0x6495ed,
    width: innerWidth,
    height: innerHeight,
});

app.ticker.stop();
gsap.ticker.add(() => {
    app.ticker.update();
});

const loader = new LoaderScene(app.screen.width, app.screen.height);

app.stage.addChild(loader);
