import { Sprite, Container, Texture, Graphics, BLEND_MODES } from "pixi.js";
import gsap from "gsap";

interface reelType {
    symbols: Sprite[];
}

export class Reel extends Container {
    playArray: Array<String> = [];
    brWidth: number;
    SYMBOL_SIZE = 0;
    reel: reelType = {
        symbols: [],
    };
    reelCount: number;
    winArr: Array<String>;

    constructor(reelCount: number, winArr: Array<String>, brWidth: number) {
        super();
        this.reelCount = reelCount;
        this.winArr = winArr;
        this.brWidth = brWidth;
        this.randomArray();
    }
    randomArray(): void {
        const SymbolsArr: Array<String> = [
            "H1",
            "H2",
            "H3",
            "H4",
            "L1",
            "L2",
            "L3",
            "L4",
            "WILD",
        ];
        this.SYMBOL_SIZE = this.brWidth / 3.333;



        for (let i = 0; i < this.reelCount - this.winArr.length; i++) {
            this.playArray.push(
                SymbolsArr[Math.floor(Math.random() * SymbolsArr.length)]
            );
        }
        this.playArray.splice(
            this.reelCount - this.winArr.length - 1,
            0,
            ...this.winArr
        );
        const texturePlay = this.playArray.map((Sym) => Texture.from(`${Sym}`));
        for (let i = 0; i < this.reelCount; i++) {
            const paddingGraphic = new Graphics();
            paddingGraphic.blendMode= BLEND_MODES.ADD
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

            symbol.scale.x = symbol.scale.y = Math.min(
                this.SYMBOL_SIZE / symbol.width,
                this.SYMBOL_SIZE / symbol.height
            )*0.8;

            symbol.x = Math.round((this.SYMBOL_SIZE - symbol.width) / 2);

            this.reel.symbols.push(symbol);
        
            paddingGraphic.addChild(symbol);
        }

    }

    spinReel(delay: number): void {
        gsap.to(this, {
            y: -(this.SYMBOL_SIZE * 16),
            duration: delay,
            repeat: 0,
            ease: "back.out(1.2 )",
        });
    }
}
