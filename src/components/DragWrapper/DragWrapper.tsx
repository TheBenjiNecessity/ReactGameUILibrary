import React, { HTMLAttributes } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Point from "../../lib/Geometry/Point";
import classes from "./DragWrapper.module.scss";

export type DragWrapperProps = {
    position?: Point;
    setPosition?: (point: Point) => void;
};

const DragWrapper = (
    props: DragWrapperProps & HTMLAttributes<HTMLDivElement>
) => {
    const { position, setPosition, children } = props;

    const onStop = (event: DraggableEvent, data: DraggableData) => {
        if (setPosition) {
            const { x, y } = data;
            const point = new Point(x, y);
            point.log();
            setPosition(point);
        }
    };

    return (
        <Draggable position={position} onStop={onStop}>
            <div className={classes["drag-wrapper-inner"]}>{children}</div>
        </Draggable>
    );
};

export default DragWrapper;
