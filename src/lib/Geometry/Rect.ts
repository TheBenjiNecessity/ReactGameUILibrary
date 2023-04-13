import Point from "./Point";
import Size from "./Size";

export default class Rect {
    constructor(public point: Point, public size: Size) {}

    static get zero() {
        return new Rect(Point.zero, Size.zero);
    }

    get center() {
        const centerX = this.size.width / 2 + this.point.x;
        const centerY = this.size.height / 2 + this.point.y;
        return new Point(centerX, centerY);
    }

    get topLeftPoint() {
        return this.point;
    }

    get topRightPoint() {
        return new Point(this.point.x + this.size.width, this.point.y);
    }

    get bottomLeftPoint() {
        return new Point(this.point.x, this.point.y + this.size.height);
    }

    get bottomRightPoint() {
        return new Point(
            this.point.x + this.size.width,
            this.point.y + this.size.height
        );
    }

    get allPoints() {
        return [
            this.topLeftPoint,
            this.topRightPoint,
            this.bottomLeftPoint,
            this.bottomRightPoint,
        ];
    }

    isEqualTo(rect: Rect) {
        return (
            this.size.isEqualTo(rect.size) && this.point.isEqualTo(rect.point)
        );
    }

    translate(x: number, y: number) {
        this.point.translate(x, y);
    }

    translateX(x: number) {
        this.point.translateX(x);
    }

    translateY(y: number) {
        this.point.translateY(y);
    }

    scale(x: number, y: number) {
        this.size.scale(x, y);
    }

    scaleX(x: number) {
        this.size.scaleX(x);
    }

    scaleY(y: number) {
        this.size.scaleY(y);
    }

    containsPoint(containedPoint: Point) {
        if (
            containedPoint.x < this.point.x ||
            containedPoint.y < this.point.y
        ) {
            return false;
        }

        if (
            containedPoint.x > this.point.x + this.size.width ||
            containedPoint.y > this.point.y + this.size.height
        ) {
            return false;
        }

        return true;
    }

    containsRect(containedRect: Rect) {
        return containedRect.allPoints.every((point) =>
            this.containsPoint(point)
        );
    }

    intersects(otherRect: Rect) {
        return (
            otherRect.allPoints.some((point) => this.containsPoint(point)) ||
            this.allPoints.some((point) => otherRect.containsPoint(point))
        );
    }
}
