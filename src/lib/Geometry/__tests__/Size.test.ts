import Size from "../Size";

describe("Size class tests", () => {
    it("inits size with correct values", () => {
        const size = new Size(1, 1);
        expect(size.height).toEqual(1);
        expect(size.width).toEqual(1);
    });

    it("inits zero size with correct values", () => {
        const size = Size.zero;
        expect(size.height).toEqual(0);
        expect(size.width).toEqual(0);
    });

    it("compares two sizes correctly", () => {
        expect(Size.zero.isEqualTo(Size.zero)).toBeTruthy();
        expect(Size.zero.isEqualTo(new Size(1, 1))).toBeFalsy();
        expect(new Size(1, 0).isEqualTo(new Size(0, 1))).toBeFalsy();
        expect(new Size(1, 1).isEqualTo(new Size(1, 1))).toBeTruthy();
    });

    it("scales size properly", () => {
        const size = new Size(1, 1);
        size.scale(2, 2);
        expect(size.height).toEqual(2);
        expect(size.width).toEqual(2);
    });

    it("scales size properly on height", () => {
        const size = new Size(1, 1);
        size.scaleX(2);
        expect(size.height).toEqual(2);
        expect(size.width).toEqual(1);
    });

    it("scales size properly on weight", () => {
        const size = new Size(1, 1);
        size.scaleY(2);
        expect(size.height).toEqual(1);
        expect(size.width).toEqual(2);
    });
});
