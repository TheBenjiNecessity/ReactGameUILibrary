import Point from "../Point";
import Size from "../Size";
import Rect from "../Rect";

describe("Rect class tests", () => {
    it("inits rect with correct values", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        expect(rect.point.x).toEqual(1);
        expect(rect.point.y).toEqual(1);
        expect(rect.size.height).toEqual(1);
        expect(rect.size.width).toEqual(1);
    });

    it("inits zero rect with correct values", () => {
        const rect = Rect.zero;
        expect(rect.point.x).toEqual(0);
        expect(rect.point.y).toEqual(0);
        expect(rect.size.height).toEqual(0);
        expect(rect.size.width).toEqual(0);
    });

    it("compares two rects correctly", () => {
        expect(Rect.zero.isEqualTo(Rect.zero)).toBeTruthy();
        expect(
            Rect.zero.isEqualTo(new Rect(new Point(1, 1), new Size(1, 1)))
        ).toBeFalsy();
        expect(
            new Rect(new Point(1, 0), new Size(1, 0)).isEqualTo(
                new Rect(new Point(0, 1), new Size(0, 1))
            )
        ).toBeFalsy();
        expect(
            new Rect(new Point(1, 1), new Size(1, 1)).isEqualTo(
                new Rect(new Point(1, 1), new Size(1, 1))
            )
        ).toBeTruthy();
    });

    it("translates rect properly", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.translate(1, 1);
        expect(rect.point.x).toEqual(2);
        expect(rect.point.y).toEqual(2);
    });

    it("translates point properly on x axis", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.translateX(1);
        expect(rect.point.x).toEqual(2);
        expect(rect.point.y).toEqual(1);
    });

    it("translates point properly on y axis", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.translateY(1);
        expect(rect.point.x).toEqual(1);
        expect(rect.point.y).toEqual(2);
    });

    it("scales rect properly", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.scale(2, 2);
        expect(rect.size.height).toEqual(2);
        expect(rect.size.width).toEqual(2);
    });

    it("scales rect properly on height", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.scaleX(2);
        expect(rect.size.height).toEqual(2);
        expect(rect.size.width).toEqual(1);
    });

    it("scales rect properly on width", () => {
        const rect = new Rect(new Point(1, 1), new Size(1, 1));
        rect.scaleY(2);
        expect(rect.size.height).toEqual(1);
        expect(rect.size.width).toEqual(2);
    });

    it("returns true for containsPoint", () => {
        const rect = new Rect(Point.zero, new Size(10, 10));
        const tl = Point.zero;
        const tr = new Point(10, 0);
        const bl = new Point(0, 10);
        const br = new Point(10, 10);
        const mid = new Point(5, 5);
        const out1 = new Point(20, 20);
        const out2 = new Point(-5, -5);
        const out3 = new Point(20, 0);
        const out4 = new Point(0, 20);
        expect(rect.containsPoint(tl)).toEqual(true);
        expect(rect.containsPoint(tr)).toEqual(true);
        expect(rect.containsPoint(bl)).toEqual(true);
        expect(rect.containsPoint(br)).toEqual(true);
        expect(rect.containsPoint(mid)).toEqual(true);

        expect(rect.containsPoint(out1)).toEqual(false);
        expect(rect.containsPoint(out2)).toEqual(false);
        expect(rect.containsPoint(out3)).toEqual(false);
        expect(rect.containsPoint(out4)).toEqual(false);
    });

    it("returns true for intersect", () => {
        const rect1 = new Rect(Point.zero, new Size(10, 10));
        const rect2 = new Rect(new Point(1, 1), new Size(10, 10));
        const rect3 = new Rect(new Point(10, 10), new Size(10, 10));
        const rect4 = new Rect(new Point(10, 0), new Size(10, 10));
        const rect5 = new Rect(new Point(0, 10), new Size(10, 10));
        const rect6 = new Rect(new Point(-10, 0), new Size(10, 10));
        const rect7 = new Rect(new Point(0, -10), new Size(10, 10));

        const rect8 = new Rect(new Point(20, 20), new Size(10, 10));

        expect(rect1.intersects(rect1)).toEqual(true);

        expect(rect2.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect2)).toEqual(true);

        expect(rect3.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect3)).toEqual(true);

        expect(rect4.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect4)).toEqual(true);

        expect(rect5.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect5)).toEqual(true);

        expect(rect6.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect6)).toEqual(true);

        expect(rect7.intersects(rect1)).toEqual(true);
        expect(rect1.intersects(rect7)).toEqual(true);

        expect(rect8.intersects(rect1)).toEqual(false);
        expect(rect1.intersects(rect8)).toEqual(false);
    });
});
