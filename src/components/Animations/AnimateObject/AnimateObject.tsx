import { useEffect, HTMLAttributes, useState } from "react";
import { MILLISECONDS_IN_SECCOND } from "../../../lib/Constants/time.constants";
import Point from "../../../lib/Geometry/Point";
import AnimateProps from "../AnimateProps.type";
import { getAnimationComponent } from "./keyFrame.service";
import useMovementArray from "./useMovementArray.hook";

export type IKeyframe = {
    point: Point;
    time: number;
    easing: string;
};

type AnimateObjectProps = {
    keyframeIndex: number;
    setKeyframeIndex: Function;
    keyframeList: IKeyframe[];
    loop: boolean;
    count: number;
};

const AnimateObject = (
    props: AnimateObjectProps & AnimateProps & HTMLAttributes<HTMLDivElement>
) => {
    const {
        play,
        keyframeList,
        keyframeIndex,
        setKeyframeIndex,
        loop,
        count,
        children,
    } = props;
    const { time, easing, point } = keyframeList[keyframeIndex];
    const playState = play ? "running" : "paused";

    const [currentCount, setCurrentCount] = useState(count);
    const movementArray = useMovementArray(keyframeList, loop);

    const Component = getAnimationComponent(
        point,
        movementArray[keyframeIndex],
        time,
        easing,
        playState
    );

    useEffect(() => {
        let timeout: number;
        if (play) {
            timeout = window.setTimeout(() => {
                if (keyframeIndex + 1 < keyframeList.length) {
                    setKeyframeIndex(keyframeIndex + 1);
                } else if (loop) {
                    if (count < 0 || currentCount > 0) {
                        setCurrentCount(currentCount - 1);
                        setKeyframeIndex(0);
                    }
                }
            }, time * MILLISECONDS_IN_SECCOND);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [
        count,
        currentCount,
        keyframeIndex,
        keyframeList.length,
        loop,
        play,
        setKeyframeIndex,
        time,
    ]);

    return <Component>{children}</Component>;
};

export default AnimateObject;
