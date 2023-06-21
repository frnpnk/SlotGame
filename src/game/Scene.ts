import { Container } from "pixi.js";
import { Background } from "./Background";
import { BackReels } from "./BackReels";
import { Game } from "./Game";
import { WinCounter } from "./WinCounter";

export class Scene extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;

    constructor(screenWidth: number, screenHeight: number) {
        super(); 
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.SetScene();
    }
    
    private SetScene(): void {
        const back = new Background(this.screenWidth, this.screenHeight);
        const backReels = new BackReels(this.screenWidth, this.screenHeight);
        const brSize = backReels.backReelSize;// getter for backReelSize to responsive sizing
        const GameRun = new Game(this.screenWidth, this.screenHeight, brSize);
        const counter = new WinCounter(this.screenWidth, this.screenHeight, brSize);
        GameRun.InitialReels(); // set First Reels
        

        this.addChild(back);
        this.addChild(backReels);
        this.addChild(GameRun);
        this.addChild(counter); 
    
    }
}
