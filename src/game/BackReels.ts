import { Container, Sprite } from "pixi.js";

export class BackReels extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private backReel: Sprite;
    
    constructor(screenWidth: number, screenHeight: number) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.backReel = Sprite.from("reels");
        this.backReelPosition();
    }

    backReelPosition(): void {
        let x = this.screenWidth / this.backReel.width;

        // seting the Y possition of the reels BG based on the bgWidth to left place counter and be responsive.
        let y =
            this.screenHeight /
            (this.backReel.height + this.backReel.width / 3);
        let bRScale = x < y ? x : y;
        this.backReel.anchor.x =(0.5);
        
        this.backReel.scale.set(bRScale);
        this.addChild(this.backReel);

        this.x = this.screenWidth / 2 
        this.y =(this.screenHeight -this.height) /2 
        
    }

    // get the size of the back reel to use as variable to responsive screen fit.
    public get backReelSize(): number[] {
        return [this.backReel.width, this.backReel.height];
    }
}
