import { Container } from "pixi.js";
import { ReelManager } from "./ReelManager";
import results from "../../static/results.json";
import { WinCounter } from "./WinCounter";
import { SpinButton } from "./SpinBtn";

export class Game extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private readonly brSize: number[];
    private SpinBtn: SpinButton;
    reelsManager: ReelManager;
    private playCounter = 0;
    private playArray = results["machine-state"];
    private counter: WinCounter;

    constructor(screenWidth: number, screenHeight: number, brSize: number[]) {
        super();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.brSize = brSize;

        this.SpinBtn = new SpinButton(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.addChild(this.SpinBtn);
        this.counter = new WinCounter(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.counter.counterPosition();
        this.addChild(this.counter);

        this.reelsManager = new ReelManager(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.SpinBtn.on("click", this.RunPlay, this);
    }

    InitialReels() {
        this.reelsManager.createInitialReels();
        this.reelsManager.reelsPosition();
        this.addChild(this.reelsManager);
    }

    SpinReels(reelsPlay: string[][]) {
        if (this.reelsManager) {
            this.removeChild(this.reelsManager);
        }
        this.reelsManager = new ReelManager(
            this.screenWidth,
            this.screenHeight,
            this.brSize
        );
        this.reelsManager.createReels(reelsPlay);
        this.reelsManager.reelsPosition();
        this.addChild(this.reelsManager);
    }

    UpdateCounter(winAmount: number) {
        this.counter.WriteWinText(winAmount);
        this.addChild(this.counter);
    }

    RunPlay() {
        this.UpdateCounter(this.playArray[this.playCounter].win);
        this.SpinReels(this.playArray[this.playCounter].reels);
        this.playCounter += 1;
        if (this.playCounter == this.playArray.length) {
            this.playCounter = 0;
        }
    }
}
