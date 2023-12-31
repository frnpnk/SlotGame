import { Container, Graphics, Assets } from "pixi.js";
import { manifest } from "../game/manifest";
import { Scene } from "../game/Scene";

export class LoaderScene extends Container {
    private loaderBar: Container;
    private loaderBarBoder: Graphics;
    private loaderBarFill: Graphics;
    private readonly screenWidth: number;
    private readonly screenHeight: number;


    constructor(screenWidth: number, screenHeight: number) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        const loaderBarWidth = screenWidth * 0.8;
        this.loaderBarFill = new Graphics();
        this.loaderBarFill.beginFill(0x008800, 1);
        this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
        this.loaderBarFill.endFill();
        this.loaderBarFill.scale.x = 0;
        this.loaderBarBoder = new Graphics();
        this.loaderBarBoder.lineStyle(10, 0x0, 1);
        this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, 50);
        this.loaderBar = new Container();
        this.loaderBar.addChild(this.loaderBarFill);
        this.loaderBar.addChild(this.loaderBarBoder);
        this.loaderBar.position.x = (screenWidth - this.loaderBar.width) / 2;
        this.loaderBar.position.y = (screenHeight - this.loaderBar.height) / 2;
        this.addChild(this.loaderBar);
        this.initializeLoader().then(() => {
            this.gameLoaded();
        });
    }

    private async initializeLoader(): Promise<void> {
        await Assets.init({ manifest: manifest });
        const bundleIds = manifest.bundles.map((bundle) => bundle.name);
        await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
    }

    private downloadProgress(progressRatio: number): void {
        this.loaderBarFill.scale.x = progressRatio;
    }

    // Calling the constructor of the Game class
    private gameLoaded(): void {
        this.removeChild(this.loaderBar);
        const gameInstance = new Scene(this.screenWidth, this.screenHeight);
        this.addChild(gameInstance);
    }
}
