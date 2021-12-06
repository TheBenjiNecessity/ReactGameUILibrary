export default class Size {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
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
