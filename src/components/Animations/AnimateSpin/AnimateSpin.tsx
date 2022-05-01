import { useMemo, HTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

type AnimateSpinProps = {
    play: boolean;
    angleOffset?: number;
    angleEnd?: number;
    easing?: string;
    count?: number;
    time?: number;
};

const AnimateSpin = ({
    play,
    angleOffset = 0,
    angleEnd = 360,
    easing = "linear",
    count = 0,
    time = 1,
    children,
}: AnimateSpinProps & HTMLAttributes<HTMLDivElement>) => {
    const rotation = useMemo(() => {
        return keyframes` 
            from {
                transform: rotate(${angleOffset}deg);
            }
            to {
                transform: rotate(${angleEnd}deg);
            }
        `;
    }, [angleOffset, angleEnd]);

    const iterationCount = useMemo(() => {
        if (count === 0) {
            return "infinite";
        } else {
            return count;
        }
    }, [count]);

    const playState = useMemo(() => {
        if (play) {
            return "running";
        } else {
            return "paused";
        }
    }, [play]);

    const Component = styled.div`
        display: inline-block;
        animation: ${rotation} ${time}s ${easing};
        animation-iteration-count: ${iterationCount};
        animation-play-state: ${playState};
    `;

    return <Component>{children}</Component>;
};

export default AnimateSpin;
