import React, { HTMLAttributes, useCallback } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Point from "../../../../lib/Geometry/Point";
import classes from "./DragWrapper.module.scss";

export type DragWrapperProps = {
    position?: Point;
    setPosition?: (point: Point) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onStart?: (event: DraggableEvent, data: DraggableData) => void;
    onStop?: (event: DraggableEvent, data: DraggableData) => void;
    onDrag?: (event: DraggableEvent, data: DraggableData) => void;
};

const DragWrapper = (
    props: DragWrapperProps & HTMLAttributes<HTMLDivElement>
) => {
    const {
        position,
        setPosition,
        children,
        onStop,
        onStart,
        onDrag,
        onMouseDown,
    } = props;

    const _onStop = useCallback(
        (event: DraggableEvent, data: DraggableData) => {
            if (setPosition) {
                setPosition(new Point(data.x, data.y));
            }

            if (onStop) {
                onStop(event, data);
            }
        },
        [onStop, setPosition]
    );

    return (
        <Draggable
            position={position}
            onStop={_onStop}
            onStart={onStart}
            onDrag={onDrag}
            onMouseDown={onMouseDown}
        >
            <div className={classes["drag-wrapper-inner"]}>{children}</div>
        </Draggable>
    );
};

export default DragWrapper;
