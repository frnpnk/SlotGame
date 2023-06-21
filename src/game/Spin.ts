import { Container, Sprite, FederatedPointerEvent } from "pixi.js";
import { Reels } from "./Reels";
import results from "../../static/results.json";
import { WinCounter } from "./WinCounter";

export class Spin extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private readonly brSize: number[];
    private SpinBtn: Sprite;
    private reels: Reels;
    playCounter = 0;
    playArray = results["machine-state"];
    counter: WinCounter;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.brSize = brSize;
        this.SpinBtn = Sprite.from("button_spin");
        this.counter = new WinCounter(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.counter.counterPosition()
        this.addChild(this.counter)
        this.reels = new Reels(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
    }
    SpinBtnPosition() {
        let btnSize = this.brSize[0] / 3;
        let scale = (btnSize / this.SpinBtn.height) * 0.8;
        this.SpinBtn.anchor.set(0.5);

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
        this.SpinBtn.scale.set(scale, scale);
        this.SpinBtn.on("pointertap", this.onClicky, this);
        this.addChild(this.SpinBtn);
        this.SpinBtn.interactive = true;
    }
    FirstReels() {
        this.reels.createFirstReels();
        this.reels.reelsPosition();
        this.addChild(this.reels);
    }

    SpinReels(reelsPlay: string[][]) {
        if (this.reels) {
            this.removeChild(this.reels);
            //  this.reels = null;
        }

        this.reels = new Reels(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.reels.createReels(reelsPlay);
        this.reels.reelsPosition();
        this.addChild(this.reels);
    }

    updateCounter(winAmount: number) {
        this.counter.WriteWinText(winAmount);
        console.log(winAmount);
        
        this.addChild(this.counter);
    }

    onClicky(e: FederatedPointerEvent) {
        e.stopPropagation();
        this.emit("click", e);
        
        this.updateCounter(this.playArray[this.playCounter].win);
        this.SpinReels(this.playArray[this.playCounter].reels);
        this.playCounter += 1;
        if (this.playCounter == this.playArray.length) {
            this.playCounter = 0;
        }
    }
    
}
