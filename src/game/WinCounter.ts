import { Container, Sprite, Text } from "pixi.js";

export class WinCounter extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private readonly brWidth: number;
    private readonly brHeigth: number;
    private WinBackground: Sprite;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.WinBackground = Sprite.from("counter");
        this.brWidth = brSize[0];
        this.brHeigth = brSize[1];
    }

    counterPosition() {
        let scale =  this.brWidth / 3 / this.WinBackground.width; //set scale of Counter to 1/3 of the reels background width
        this.WinBackground.anchor.set(0.5);
        this.WinBackground.x = (this.screenWidth - this.width) / 2;
        this.WinBackground.y =
            this.screenHeight / 2 + this.brHeigth / 2 +  this.brWidth / 12;
        this.WinBackground.scale.set(scale);
        this.addChild(this.WinBackground);
        this.WinBackground.interactive = true;
    }

    WriteWinText(winAmount: number) {
        if (this.children[1]) {
            this.removeChildAt(1);
        }

        const text = new Text(`Win: \n USD ${winAmount}`, {
            fontFamily: "Arial",
            fontSize: 24,
            fill: 0xffffff,
            align: "center",
        });
        text.anchor.set(0.5);
        text.x = this.WinBackground.x;
        text.y = this.WinBackground.y;

        setTimeout(() => {  
            this.addChild(text);
        }, 3000);
    }
}
