import { makeSize, sizeZero } from "../Size";

describe("Size class tests", () => {
    it("inits size with correct values", () => {
        const size = makeSize(1, 1);
        expect(size.height).toEqual(1);
        expect(size.width).toEqual(1);
    });

    it("inits zero size with correct values", () => {
        const size = sizeZero();
        expect(size.height).toEqual(0);
        expect(size.width).toEqual(0);
    });

    it("compares two sizes correctly", () => {
        expect(sizeZero().isEqualTo(sizeZero())).toBeTruthy();
        expect(sizeZero().isEqualTo(makeSize(1, 1))).toBeFalsy();
        expect(makeSize(1, 0).isEqualTo(makeSize(0, 1))).toBeFalsy();
        expect(makeSize(1, 1).isEqualTo(makeSize(1, 1))).toBeTruthy();
    });

    it("scales size properly", () => {
        const size = makeSize(1, 1);
        size.scale(2, 2);
        expect(size.height).toEqual(2);
        expect(size.width).toEqual(2);
    });

    it("scales size properly on height", () => {
        const size = makeSize(1, 1);
        size.scaleX(2);
        expect(size.height).toEqual(2);
        expect(size.width).toEqual(1);
    });

    it("scales size properly on weight", () => {
        const size = makeSize(1, 1);
        size.scaleY(2);
        expect(size.height).toEqual(1);
        expect(size.width).toEqual(2);
    });
});
