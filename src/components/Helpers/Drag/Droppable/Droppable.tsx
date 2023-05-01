import { HTMLAttributes, useCallback, useContext, useRef } from "react";
import DraggableContext, {
    IDraggableContext,
} from "../DropArea/DraggableContext";
import DragWrapper from "../DragWrapper/DragWrapper";
import classes from "../Drag.module.scss";
import { getOrigin } from "../../../../lib/Geometry/utils.service";

/**
 * @param {string} id a string attached to the Droppable that is
 *      given to the DropArea onDropItem callback when a drag event
 *      has occured.
 * @param {node} children the content of the component
 * @returns Represents a draggable item that can be dropped onto a DropTarget
 * component.
 */
const Droppable = (props: HTMLAttributes<HTMLDivElement>) => {
    const { id = "", children } = props;

    const ref = useRef<HTMLDivElement>(null);
    const { hits, onDropItem } = useContext(
        DraggableContext
    ) as IDraggableContext;

    const _onStop = useCallback(() => {
        const point = getOrigin(ref.current);

        if (!point) {
            return;
        }

        const targets = hits(point);

        if (targets?.length) {
            onDropItem(id, targets[0]);
        }
    }, [hits, id, onDropItem]);

    return (
        <DragWrapper onStop={_onStop}>
            <div ref={ref} className={classes["drop-element-wrapper"]}>
                {children}
            </div>
        </DragWrapper>
    );
};

export default Droppable;
