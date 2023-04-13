import Point from "../Geometry/Point";
import Rect from "../Geometry/Rect";
import Size from "../Geometry/Size";
import TreeNode from "./TreeNode";

const ITEM_LIMIT = 3;

export interface QuadTreeItem {
    item: any;
    bounds: Rect;
}

export default class QuadTreeNode extends TreeNode {
    constructor(
        items: QuadTreeItem[],
        private bounds: Rect,
        topLeft?: QuadTreeNode,
        topRight?: QuadTreeNode,
        bottomLeft?: QuadTreeNode,
        bottomRight?: QuadTreeNode
    ) {
        const nodes = [topLeft!, topRight!, bottomLeft!, bottomRight!].filter(
            (item) => item !== null && typeof item !== "undefined"
        );
        super(items, nodes);
    }

    get hasQuadrants(): boolean {
        const quadrants = this.children.filter(
            (child) => child !== null && typeof child !== "undefined"
        );

        return quadrants.length > 0;
    }

    get items(): QuadTreeItem[] {
        return this.item as QuadTreeItem[];
    }

    addItem(item: QuadTreeItem): void {
        if (this.hasQuadrants) {
            for (let i = 0; i < this.children.length; i++) {
                if (
                    item.bounds.intersects(
                        (this.children[i] as QuadTreeNode).bounds
                    )
                ) {
                    (this.children[i] as QuadTreeNode).addItem(item);
                }
            }
        } else {
            this.items.push(item);

            if (this.items.length > ITEM_LIMIT) {
                const halfH = this.bounds.size.height / 2;
                const halfW = this.bounds.size.width / 2;
                const halfSize = new Size(halfH, halfW);
                const { x, y } = this.bounds.point;

                const tlBounds = new Rect(this.bounds.point, halfSize);
                const trBounds = new Rect(new Point(halfW, y), halfSize);
                const blBounds = new Rect(new Point(x, halfH), halfSize);
                const brBounds = new Rect(new Point(halfW, halfH), halfSize);

                const topLeftItems = [];
                const topRightItems = [];
                const bottomLeftItems = [];
                const bottomRightItems = [];

                for (const item of this.items) {
                    if (item.bounds.intersects(tlBounds)) {
                        topLeftItems.push(item);
                    }

                    if (item.bounds.intersects(trBounds)) {
                        topRightItems.push(item);
                    }

                    if (item.bounds.intersects(blBounds)) {
                        bottomLeftItems.push(item);
                    }

                    if (item.bounds.intersects(brBounds)) {
                        bottomRightItems.push(item);
                    }
                }

                this.item = [];
                this.children = [
                    new QuadTreeNode(topLeftItems, tlBounds),
                    new QuadTreeNode(topRightItems, trBounds),
                    new QuadTreeNode(bottomLeftItems, blBounds),
                    new QuadTreeNode(bottomRightItems, brBounds),
                ];
            }
        }
    }

    itemsAtPoint(point: Point): QuadTreeItem[] {
        if (this.isLeaf) {
            return this.items.filter((item) =>
                item.bounds.containsPoint(point)
            );
        }

        for (const child of this.children) {
            if ((child as QuadTreeNode).bounds.containsPoint(point)) {
                return (child as QuadTreeNode).itemsAtPoint(point);
            }
        }

        return [];
    }
}
