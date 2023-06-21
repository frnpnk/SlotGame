import { Container, Sprite, Texture } from "pixi.js";

export class Background extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;

    // We promoted clampy to a member of the class
    private background: Sprite;

    constructor(screenWidth: number, screenHeight: number) {
        super(); 
        
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.background = Sprite.from("BG");
        this.backgroundPosition()    
        
        
        
    }
    backgroundPosition(){
        const backgroundTexture = Texture.from("BG");
        let x = this.screenWidth / backgroundTexture.width;
        let y = this.screenHeight / backgroundTexture.height;
        let scale = x > y ? x : y;
        this.background.anchor.set(0.5);
        this.background.x = this.screenWidth / 2;
        this.background.y = this.screenHeight / 2;
        this.background.scale.x = scale;
        this.background.scale.y = scale;

        this.addChild(this.background);
    }
}
