import { makePoint, pointZero } from "./Point";
import { sizeZero } from "./Size";

class Rect {
    constructor(point, size) {
        this.point = point;
        this.size = size;
    }

    get center() {
        const centerX = this.size.width / 2 + this.point.x;
        const centerY = this.size.height / 2 + this.point.y;
        return makePoint(centerX, centerY);
    }

    isEqualTo(rect) {
        return (
            this.size.isEqualTo(rect.size) && this.point.isEqualTo(rect.point)
        );
    }

    translate(x, y) {
        this.point.translate(x, y);
    }

    translateX(x) {
        this.point.translateX(x);
    }

    translateY(y) {
        this.point.translateY(y);
    }

    scale(x, y) {
        this.size.scale(x, y);
    }

    scaleX(x) {
        this.size.scaleX(x);
    }

    scaleY(y) {
        this.size.scaleY(y);
    }
}

export const makeRect = (point, size) => {
    return new Rect(point, size);
};

export const rectZero = () => {
    return new Rect(pointZero(), sizeZero());
};
