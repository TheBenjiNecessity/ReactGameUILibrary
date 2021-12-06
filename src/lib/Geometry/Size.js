class Size {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    isEqualTo(size) {
        return this.height === size.height && this.width === size.width;
    }

    scale(x, y) {
        this.height *= x;
        this.width *= y;
    }

    scaleX(x) {
        this.scale(x, 1);
    }

    scaleY(y) {
        this.scale(1, y);
    }
}

export const makeSize = (x, y) => {
    return new Size(x, y);
};

export const sizeZero = () => {
    return new Size(0, 0);
};
