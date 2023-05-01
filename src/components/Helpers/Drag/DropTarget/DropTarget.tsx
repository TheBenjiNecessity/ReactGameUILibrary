import { HTMLAttributes, useContext, useEffect, useRef } from "react";
import { Rect } from "../../../../lib/Geometry";
import DraggableContext, {
    IDraggableContext,
} from "../DropArea/DraggableContext";
import classes from "../Drag.module.scss";
import { getBounds } from "../../../../lib/Geometry/utils.service";

/**
 * @param {string} id a string attached to the DropTarget that is
 *      given to the DropArea onDropItem callback when a drag event
 *      has occured.
 * @param {node} children the content of the component
 * @returns Represents a target for drag events.
 */
const DropTarget = (props: HTMLAttributes<HTMLDivElement>) => {
    const { id = "", children } = props;

    const ref = useRef<HTMLDivElement>(null);
    const { setDropTarget } = useContext(DraggableContext) as IDraggableContext;

    useEffect(() => {
        const bounds = getBounds(ref.current);

        if (id && bounds && !bounds.isEqualTo(Rect.zero)) {
            setDropTarget(id, bounds);
        }
    }, [id, setDropTarget]);

    return (
        <div ref={ref} className={classes["drop-element-wrapper"]}>
            {children}
        </div>
    );
};

export default DropTarget;
