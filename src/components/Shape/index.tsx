import React, { useMemo, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./Shape.module.scss";
import { ReactComponent as Pentagon } from "../../assets/images/pentagon.svg";
import { ReactComponent as Diamond } from "../../assets/images/diamond.svg";
import { ReactComponent as Hexagon } from "../../assets/images/hexagon.svg";
import { ReactComponent as Octagon } from "../../assets/images/octagon.svg";
import { ShapeProps } from "./Types";
import Square from "./Square";
import Circle from "./Circle";
import Triangle from "./Triangle";

export enum SHAPE {
    SQUARE,
    CIRCLE,
    TRIANGLE,
    HEXAGON,
    OCTAGON,
    DIAMOND,
    PENTAGON,
}

const SHAPE_ICON = {
    [SHAPE.SQUARE]: Square,
    [SHAPE.CIRCLE]: Circle,
    [SHAPE.TRIANGLE]: Triangle,
    [SHAPE.HEXAGON]: Hexagon,
    [SHAPE.OCTAGON]: Octagon,
    [SHAPE.DIAMOND]: Diamond,
    [SHAPE.PENTAGON]: Pentagon,
};

type Props = {
    shape: SHAPE;
};

const Shape = (props: ShapeProps & Props & HTMLAttributes<HTMLDivElement>) => {
    const { children, className, color, size, shape } = props;
    const Component = useMemo(() => SHAPE_ICON[shape], [shape]);

    return (
        <div
            className={clsx(className, classes["shape"])}
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
        >
            <Component height={size} width={size} fill={color} stroke={color} />
            {children && (
                <div className={classes["shape-wrapper"]}>{children}</div>
            )}
        </div>
    );
};

export default Shape;
