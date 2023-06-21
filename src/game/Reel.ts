import { Sprite, Container, Texture, Graphics, BLEND_MODES } from "pixi.js";
import { manifest } from "../game/manifest";
import gsap from "gsap";

interface reelType {
    symbols: Sprite[];
}

export class Reel extends Container {
    private playArray: Array<String> = [];
    private brWidth: number;
    private SYMBOL_SIZE = 0;
    private reel: reelType = {
        symbols: [],
    };
    private reelCount: number;
    private winArr: Array<String>;

    constructor(reelCount: number, winArr: Array<String>, brWidth: number) {
        super();
        this.reelCount = reelCount;
        this.winArr = winArr;
        this.brWidth = brWidth;
        this.randomArray();
    }
    randomArray(): void {
        //Setting simbols Array from manifest.json, modify there if is necesary.
        const SymbolsArr: Array<String> = Object.keys(
            manifest.bundles[0].assets
        );
        this.SYMBOL_SIZE = this.brWidth / 3.333;

        for (let i = 0; i < this.reelCount - this.winArr.length; i++) {
            this.playArray.push(
                SymbolsArr[Math.floor(Math.random() * SymbolsArr.length)]
            );
        }
        //Adding winning symbols to the end of the array, leaving one more Symbol at the end, for the bounce-back effect
        this.playArray.splice(
            this.reelCount - this.winArr.length - 1,
            0,
            ...this.winArr
        );

        const texturePlay = this.playArray.map((Sym) => Texture.from(`${Sym}`));
        //Adding padding to the reel, to scale the Symbols easier.
        for (let i = 0; i < this.reelCount; i++) {
            const paddingGraphic = new Graphics();
            paddingGraphic.blendMode = BLEND_MODES.ADD;
            paddingGraphic.lineStyle(1, 0x00000000, 4);
            paddingGraphic.drawRect(
                0,
                (i - 1) * this.SYMBOL_SIZE,
                this.SYMBOL_SIZE,
                i * this.SYMBOL_SIZE
            );
            this.addChild(paddingGraphic);

            const symbol = new Sprite(texturePlay[i]);
            symbol.y = i * this.SYMBOL_SIZE;

            symbol.scale.set(
                Math.min(
                    this.SYMBOL_SIZE / symbol.width,
                    this.SYMBOL_SIZE / symbol.height
                ) * 0.8
            );
            symbol.x = (this.SYMBOL_SIZE - symbol.width) / 2;
            this.reel.symbols.push(symbol);
            paddingGraphic.addChild(symbol);
        }
    }

    //Spin animation
    spinReel(delay: number): void {
        gsap.to(this, {
            y: -(this.SYMBOL_SIZE * (this.reelCount - this.winArr.length - 1)),
            duration: delay,
            repeat: 0,
            ease: "back.out(0.7)", // Bounce-back effect (to simulate reel inertia )
        });
    }
}
