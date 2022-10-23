export default class Point {
    constructor(public x: number, public y: number) {}

    static get zero() {
        return new Point(0, 0);
    }

    getDistance(point: Point) {
        const diffX = Math.pow(this.x - point.x, 2);
        const diffY = Math.pow(this.y - point.y, 2);
        return Math.sqrt(diffX + diffY);
    }

    isEqualTo(point: Point) {
        return this.x === point.x && this.y === point.y;
    }

    translate(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    translateX(x: number) {
        this.translate(x, 0);
    }

    translateY(y: number) {
        this.translate(0, y);
    }

    log(id?: string) {
        if (id) {
            console.log(`${id}: x => ${this.x} y=> ${this.y}`);
        } else {
            console.log(`Point: x => ${this.x} y=> ${this.y}`);
        }
    }
}
