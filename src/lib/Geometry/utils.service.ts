import * as ReactDOM from "react-dom";
import Point from "./Point";
import Size from "./Size";
import Rect from "./Rect";

export const getBoundingRect = (refCurrent: HTMLDivElement | null) => {
    if (!refCurrent) {
        return null;
    }

    const node = ReactDOM.findDOMNode(refCurrent) as HTMLDivElement;
    return node?.getBoundingClientRect();
};

export const getOrigin = (refCurrent: HTMLDivElement | null) => {
    const boundingRect = getBoundingRect(refCurrent);

    if (!boundingRect) {
        return null;
    }

    return new Point(boundingRect.x, boundingRect.y);
};

export const getSize = (refCurrent: HTMLDivElement | null) => {
    const boundingRect = getBoundingRect(refCurrent);

    if (!boundingRect) {
        return null;
    }

    return new Size(boundingRect.height, boundingRect.width);
};

export const getBounds = (refCurrent: HTMLDivElement | null) => {
    const boundingRect = getBoundingRect(refCurrent);

    if (!boundingRect) {
        return null;
    }

    const point = new Point(boundingRect.x, boundingRect.y);
    const size = new Size(boundingRect.height, boundingRect.width);
    return new Rect(point, size);
};
