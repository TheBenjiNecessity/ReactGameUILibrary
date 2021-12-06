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
});
