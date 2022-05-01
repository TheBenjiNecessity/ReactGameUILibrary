import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styled from "styled-components";
import classes from "./AnimateFlip.module.scss";

type AnimateFlipProps = {
    flip: boolean;
    back: ReactNode;
    use3D: boolean;
    flipSpeed: number;
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
    const { use3D, flip, flipSpeed, back, children, ...restProps } = props;

    const innerClassNames = clsx(
        classes["flip-container-inner"],
        flip && classes["flipped"]
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
            >
                <div className={classes["flip-container-front"]}>
                    {children}
                </div>
                <div className={classes["flip-container-back"]}>{back}</div>
            </FlipContainerInner>
        </FlipContainerOuter>
    );
};

export default AnimateFlip;
