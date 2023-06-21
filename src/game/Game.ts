import { Container } from "pixi.js";
import { Background } from "./Background";
import { BackReels } from "./BackReels";
import { Spin } from "./Spin";
import { WinCounter } from "./WinCounter";

export class Game extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;

    constructor(screenWidth: number, screenHeight: number) {
        super(); 
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.GameRun();
    }
    private GameRun(): void {
        const back = new Background(this.screenWidth, this.screenHeight);
        const backReels = new BackReels(this.screenWidth, this.screenHeight);
        const brSize = backReels.backReelSize;
        const spinBtn = new Spin(this.screenWidth, this.screenHeight, brSize);
        const counter = new WinCounter(this.screenWidth, this.screenHeight, brSize);

        spinBtn.SpinBtnPosition();
        spinBtn.FirstReels()




    
        
        this.addChild(back);
        this.addChild(backReels);
        this.addChild(spinBtn);
        this.addChild(counter);
    
    }
}
