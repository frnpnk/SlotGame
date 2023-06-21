import { Container, Graphics } from "pixi.js";
import { Reel } from "./Reel";

export class Reels extends Container {
    private brWidth: number;
    private brHeight: number;
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private symbolsQuantity = 20;
    private reelsCount = 3;
    private timeBetween = 0;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.brWidth = brSize[0];
        this.brHeight = brSize[1];
    }

    public createReels(ARR: Array<Array<string>>): void {
        this.timeBetween = 1;

        for (let i = 0; i < this.reelsCount; i++) {
            const reelN = new Reel(this.symbolsQuantity, ARR[i], this.brWidth);
            reelN.x = i * (this.brWidth / 3.1);
            this.addChild(reelN);
            reelN.spinReel((i + 1) * this.timeBetween);
        }
        let mask = new Graphics();
        mask.beginFill(0xffffff);
        mask.drawRect(0, 0, this.brWidth, this.brHeight);
        mask.endFill();
        this.mask = mask;
        this.addChild(mask);
    }

    //create first reels
    public createFirstReels(): void {
        const mockArr = ["H1", "H1", "H1"];
        const mockSymbolsQuantity = 7;

        for (let i = 0; i < this.reelsCount; i++) {
            const reelN = new Reel(mockSymbolsQuantity, mockArr, this.brWidth);
            reelN.x = i * (this.brWidth / 3.1);
            this.addChild(reelN);
        }
        let maskf = new Graphics();
        maskf.beginFill(0xffffff);
        maskf.drawRect(0, 0, this.brWidth, this.brHeight);
        maskf.endFill();
        this.mask = maskf;
        this.addChild(maskf);
    }

    public reelsPosition(): void {
        this.x = (this.screenWidth - this.width) / 2;
        this.y = (this.screenHeight - this.brHeight) / 2;
    }
}
