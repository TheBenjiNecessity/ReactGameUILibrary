import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styled from "styled-components";
import classes from "./AnimateFlip.module.scss";
import Axis from "../../../lib/Geometry/Axis";

type AnimateFlipProps = {
    flip: boolean;
    back: ReactNode;
    use3D: boolean;
    flipSpeed: number;
    didFlip: Function;
    flipAxis?: Axis;
};

type InnerDivStyle = {
    flipSpeed: number;
};

type OuterDivStyle = {
    use3D: boolean;
};

const FlipContainerInner = styled.div`
    transition: transform ${({ flipSpeed }: InnerDivStyle) => flipSpeed}s;
`;

const FlipContainerOuter = styled.div`
    ${({ use3D }: OuterDivStyle) => (use3D ? "perspective: 1000px;" : "")}
`;

const AnimateFlip = (
    props: AnimateFlipProps & HTMLAttributes<HTMLDivElement>
) => {
    const {
        use3D,
        flip,
        flipSpeed,
        flipAxis,
        back,
        didFlip,
        children,
        ...restProps
    } = props;

    const innerClassNames = clsx(
        classes["flip-container-inner"],
        flip && classes["flipped"],
        flipAxis === Axis.X ? classes["X"] : classes["Y"]
    );

    const frontClassNames = clsx(
        classes["flip-container-front"],
        flipAxis === Axis.X ? classes["X"] : classes["Y"]
    );

    const backClassNames = clsx(
        classes["flip-container-back"],
        flipAxis === Axis.X ? classes["X"] : classes["Y"]
    );

    return (
        <FlipContainerOuter
            use3D={use3D}
            className={classes["flip-container"]}
            {...restProps}
        >
            <FlipContainerInner
                flipSpeed={flipSpeed}
                className={innerClassNames}
                onTransitionEnd={(event) => didFlip(flip, event)}
            >
                <div className={frontClassNames}>{children}</div>
                <div className={backClassNames}>{back}</div>
            </FlipContainerInner>
        </FlipContainerOuter>
    );
};

export default AnimateFlip;
