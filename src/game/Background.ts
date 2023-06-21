import { Container, Sprite } from "pixi.js";

export class Background extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private background: Sprite;

    constructor(screenWidth: number, screenHeight: number) {
        super(); 
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.background = Sprite.from("BG");
        this.backgroundPosition()    
    }

    backgroundPosition(){
        let x = this.screenWidth / this.background.width;
        let y = this.screenHeight / this.background.height;
        let scale = x > y ? x : y;
        this.background.anchor.set(0.5);
        this.background.x = this.screenWidth / 2;
        this.background.y = this.screenHeight / 2;
        this.background.scale.set(scale);
        this.addChild(this.background);
    }
}
