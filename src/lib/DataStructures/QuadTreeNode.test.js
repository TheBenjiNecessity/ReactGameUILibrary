import Point from "../Geometry/Point";
import Rect from "../Geometry/Rect";
import Size from "../Geometry/Size";
import QuadTreeNode from "./QuadTreeNode";

test("Adds items to quadtree in appropriate place", () => {
    const point = Point.zero;
    const size = new Size(100, 100);
    const quadtree = new QuadTreeNode(new Rect(point, size), []);

    quadtree.addItem({
        item: { test: "test1" },
        bounds: new Rect(new Point(2, 2), new Size(5, 5)),
    });

    expect(quadtree.isLeaf).toEqual(true);
    expect(quadtree.items).toHaveLength(1);
    expect(quadtree.children).toHaveLength(0);

    quadtree.addItem({
        item: { test: "test2" },
        bounds: new Rect(new Point(55, 78), new Size(5, 5)),
    });

    quadtree.addItem({
        item: { test: "test3" },
        bounds: new Rect(new Point(70, 5), new Size(5, 5)),
    });

    quadtree.addItem({
        item: { test: "test4" },
        bounds: new Rect(new Point(5, 70), new Size(5, 5)),
    });

    quadtree.addItem({
        item: { test: "test5" },
        bounds: new Rect(new Point(70, 70), new Size(5, 5)),
    });

    expect(quadtree.isLeaf).toEqual(false);
    expect(quadtree.items).toHaveLength(0);
    expect(quadtree.children).toHaveLength(4);

    expect(quadtree.children[0].isLeaf).toEqual(true);
    expect(quadtree.children[0].items).toHaveLength(1);

    expect(quadtree.children[1].isLeaf).toEqual(true);
    expect(quadtree.children[1].items).toHaveLength(1);

    expect(quadtree.children[2].isLeaf).toEqual(true);
    expect(quadtree.children[2].items).toHaveLength(1);

    expect(quadtree.children[3].isLeaf).toEqual(true);
    expect(quadtree.children[3].items).toHaveLength(2);
});
