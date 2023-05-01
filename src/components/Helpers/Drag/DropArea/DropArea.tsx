import { HTMLAttributes, useCallback, useRef } from "react";
import QuadTreeNode from "../../../../lib/DataStructures/QuadTreeNode";
import DraggableContext from "./DraggableContext";
import { Point, Rect } from "../../../../lib/Geometry";
import { getBounds } from "../../../../lib/Geometry/utils.service";

export type DroppableProps = {
    onDropItem: (droppableId: string, dropTargetId: string) => void;
};

/**
 * A context wrapper used with drag and drop events
 * @param {func} onDropItem a callback called when a user stops dragging a
 *      Droppable component over a DropTarget component.
 * @param {node} children the content of the droparea
 * @returns A context wrapper that interacts with Droppable and DropTarget
 *      components.
 */
const DropArea = (props: DroppableProps & HTMLAttributes<HTMLDivElement>) => {
    const { onDropItem, children } = props;

    const ref = useRef<HTMLDivElement>(null);
    const elements = useRef<any>({});
    const quadtree = useRef<QuadTreeNode>();

    /**
     * Called by sub components on load
     * @param {string} key the name of the item
     * @param {Rect} bounds the bounding box for the item
     */
    const setDropTarget = useCallback((key: string, bounds: Rect) => {
        if (!elements.current) {
            return;
        }

        // add item to quad tree based on rect
        if (!elements.current[key]) {
            elements.current[key] = true;

            if (!quadtree.current) {
                const rect = getBounds(ref.current);

                if (rect) {
                    quadtree.current = new QuadTreeNode(rect);
                }
            }

            quadtree.current?.addItem({ item: key, bounds });
        }
    }, []);

    /**
     * Returns a list of ids for DropTarget components that are under
     * the given point on the screen.
     * @param {Point} point the point to detect hits
     */
    const hits = useCallback((point: Point) => {
        return quadtree.current?.itemsAtPoint(point).map((item) => item.item);
    }, []);

    return (
        <DraggableContext.Provider value={{ onDropItem, hits, setDropTarget }}>
            <div ref={ref}>{children}</div>
        </DraggableContext.Provider>
    );
};

export default DropArea;
