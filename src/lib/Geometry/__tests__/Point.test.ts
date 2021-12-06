import Point from "../Point";

describe("Point class tests", () => {
    it("inits point with correct values", () => {
        const point = new Point(1, 1);
        expect(point.x).toEqual(1);
        expect(point.y).toEqual(1);
    });

    it("inits zero point with correct values", () => {
        const point = Point.zero;
        expect(point.x).toEqual(0);
        expect(point.y).toEqual(0);
    });

    it("gets correct distance value", () => {
        expect(Point.zero.getDistance(new Point(0, 1))).toEqual(1);
        expect(Point.zero.getDistance(new Point(1, 0))).toEqual(1);
        expect(Point.zero.getDistance(new Point(1, 1))).toEqual(Math.sqrt(2));
    });

    it("compares two points correctly", () => {
        expect(Point.zero.isEqualTo(Point.zero)).toBeTruthy();
        expect(Point.zero.isEqualTo(new Point(1, 1))).toBeFalsy();
        expect(new Point(1, 0).isEqualTo(new Point(0, 1))).toBeFalsy();
        expect(new Point(1, 1).isEqualTo(new Point(1, 1))).toBeTruthy();
    });

    it("translates point properly", () => {
        const point = new Point(1, 1);
        point.translate(1, 1);
        expect(point.x).toEqual(2);
        expect(point.y).toEqual(2);
    });

    it("translates point properly on x axis", () => {
        const point = new Point(1, 1);
        point.translateX(1);
        expect(point.x).toEqual(2);
        expect(point.y).toEqual(1);
    });

    it("translates point properly on y axis", () => {
        const point = new Point(1, 1);
        point.translateY(1);
        expect(point.x).toEqual(1);
        expect(point.y).toEqual(2);
    });
});
