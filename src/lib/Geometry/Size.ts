export default class Size {
    constructor(public height: number, public width: number) {
        if (height < 0 || width < 0) {
            throw new Error("Size cannot have negative dimentions");
        }
    }

    static get zero() {
        return new Size(0, 0);
    }

    isEqualTo(size: Size) {
        return this.height === size.height && this.width === size.width;
    }

    scale(x: number, y: number) {
        this.height *= x;
        this.width *= y;
    }

    scaleX(x: number) {
        this.scale(x, 1);
    }

    scaleY(y: number) {
        this.scale(1, y);
    }
}
