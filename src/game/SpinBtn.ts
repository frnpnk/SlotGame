import { Container, Sprite } from "pixi.js";

export class SpinButton extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private readonly brSize: number[];
    private SpinBtn: Sprite;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.brSize = brSize;
        this.SpinBtn = Sprite.from("button_spin");
        this.SpinBtnPosition();
    }

    SpinBtnPosition() {
        let btnSize = this.brSize[0] / 3;
        let scale = (btnSize / this.SpinBtn.height) * 0.8;
        this.SpinBtn.anchor.set(0.5);
        // Scale and move the Spin button to fit screen on mobile Or vertical screen
        if (this.screenWidth < this.brSize[0] + btnSize) {
            scale = btnSize / 3 / this.SpinBtn.height;
            this.SpinBtn.x = this.screenWidth / 2 + this.brSize[1] / 3;
            this.SpinBtn.y =
                this.screenHeight / 2 +
                this.brSize[1] / 2 +
                this.brSize[0] / 12;
        } else {
            this.SpinBtn.x =
                this.screenWidth - (this.screenWidth - this.brSize[0]) / 4;
            this.SpinBtn.y = this.screenHeight / 2;
        }
        this.SpinBtn.scale.set(scale);
        this.addChild(this.SpinBtn);
        
    }
}
