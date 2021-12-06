class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance(point) {
        const diffX = Math.pow(this.x - point.x, 2);
        const diffY = Math.pow(this.y - point.y, 2);
        return Math.sqrt(diffX + diffY);
    }

    isEqualTo(point) {
        return this.x === point.x && this.y === point.y;
    }

    translate(x, y) {
        this.x += x;
        this.y += y;
    }

    translateX(x) {
        this.translate(x, 0);
    }

    translateY(y) {
        this.translate(0, y);
    }
}

export const makePoint = (x, y) => {
    return new Point(x, y);
};

export const pointZero = () => {
    return new Point(0, 0);
};
