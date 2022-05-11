import { useMemo, HTMLAttributes, TransitionEventHandler } from "react";
import styled from "styled-components";

type AnimateScaleProps = {
    scale?: boolean;
    scaleStart?: number;
    scaleEnd?: number;
    easing?: string;
    count?: number;
    time?: number;
    didEnd?: TransitionEventHandler<HTMLDivElement>;
};

type AnimateScaleComponentProps = {
    time: number;
    easing: string;
    scaleValue: number;
    onTransitionEnd: Function;
};

const AnimateScaleComponent = styled.div`
    transition: ${({ time, easing }: AnimateScaleComponentProps) =>
        `all ${time}s ${easing};`}
    transform: ${({ scaleValue }: AnimateScaleComponentProps) =>
        `scale(${scaleValue});`}
`;

const AnimateScale = (
    props: AnimateScaleProps & HTMLAttributes<HTMLDivElement>
) => {
    const {
        scale = false,
        scaleStart = 1,
        scaleEnd = 1,
        easing = "linear",
        time = 1,
        didEnd = () => {},
        children,
        ...restProps
    } = props;

    const scaleValue = useMemo(() => {
        return scale ? scaleEnd : scaleStart;
    }, [scale, scaleEnd, scaleStart]);

    return (
        <AnimateScaleComponent
            time={time}
            easing={easing}
            scaleValue={scaleValue}
            onTransitionEnd={didEnd}
            {...restProps}
        >
            {children}
        </AnimateScaleComponent>
    );
};

export default AnimateScale;
