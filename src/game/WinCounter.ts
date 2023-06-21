import { Container, Sprite, Text } from "pixi.js";

export class WinCounter extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private readonly brSize: number[];
    WinBackground: Sprite;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();

        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.WinBackground = Sprite.from("counter");
        this.brSize = brSize;
    }

    counterPosition() {
        let scale = this.brSize[0] / 3 / this.WinBackground.width;
        this.WinBackground.anchor.set(0.5);
        this.WinBackground.x = (this.screenWidth - this.width) / 2;
        this.WinBackground.y =
            this.screenHeight / 2 + this.brSize[1] / 2 + this.brSize[0] / 12;
        this.WinBackground.scale.set(scale, scale);
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

        console.log(this.WinBackground.x);
        console.log("Y", this.WinBackground.y);
        setTimeout(() => {
            this.addChild(text);
        }, 3000);
    }
}
