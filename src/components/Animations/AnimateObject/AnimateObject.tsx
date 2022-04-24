import { useMemo, useEffect, HTMLAttributes, useState } from "react";
import Point from "../../../lib/Geometry/Point";
import AnimateProps from "../AnimateProps.type";
import { getAnimationComponent, getKeyFrame } from "./keyFrame.service";
import usePlayState from "../usePlayState.hook";

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

    const playState = usePlayState(play);

    const [currentCount, setCurrentCount] = useState(count);

    const movementArray = useMemo(() => {
        if (!keyframeList || !keyframeList.length) {
            return [];
        }

        return keyframeList.map((keyframe, index) => {
            if (index === keyframeList.length - 1) {
                if (loop) {
                    const fromKeyframe = keyframeList[index];
                    const toKeyframe = keyframeList[0];

                    return getKeyFrame(fromKeyframe, toKeyframe);
                } else {
                    return null;
                }
            }

            const fromKeyframe = keyframe;
            const toKeyframe = keyframeList[index + 1];

            return getKeyFrame(fromKeyframe, toKeyframe);
        });
    }, [keyframeList, loop]);

    const currentKeyframe = useMemo(() => {
        return movementArray[keyframeIndex];
    }, [keyframeIndex, movementArray]);

    const { time, easing, point } = useMemo(() => {
        return keyframeList[keyframeIndex];
    }, [keyframeIndex, keyframeList]);

    const Component = getAnimationComponent(
        point,
        currentKeyframe,
        time,
        easing,
        playState
    );

    useEffect(() => {
        if (play) {
            setTimeout(() => {
                if (keyframeIndex + 1 < keyframeList.length) {
                    setKeyframeIndex(keyframeIndex + 1);
                } else if (loop) {
                    if (count < 0 || currentCount > 0) {
                        setCurrentCount(currentCount - 1);
                        setKeyframeIndex(0);
                    }
                }
            }, time * 1000);
        }
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
