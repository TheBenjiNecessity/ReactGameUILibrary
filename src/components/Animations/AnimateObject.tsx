import { useMemo, useEffect, HTMLAttributes, useState } from "react";
import _ from "lodash";
import Point from "../../lib/Geometry/Point";
import AnimateProps from "./AnimateProps.type";
import styled, { keyframes } from "styled-components";

export type Keyframe = {
    point: Point;
    time: number;
    easing: string;
};

type AnimateObjectProps = {
    keyframeIndex: number;
    setKeyframeIndex: Function;
    keyframeList: Keyframe[];
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

                    return keyframes` 
                        from {
                            left: ${fromKeyframe.point.x}px;
                            top: ${fromKeyframe.point.y}px;
                        }
                        to {
                            left: ${toKeyframe.point.x}px;
                            top: ${toKeyframe.point.y}px;
                        }
                    `;
                } else {
                    return null;
                }
            }

            const fromKeyframe = keyframe;
            const toKeyframe = keyframeList[index + 1];

            return keyframes` 
                from {
                    left: ${fromKeyframe.point.x}px;
                    top: ${fromKeyframe.point.y}px;
                }
                to {
                    left: ${toKeyframe.point.x}px;
                    top: ${toKeyframe.point.y}px;
                }
            `;
        });
    }, [keyframeList, loop]);

    const playState = useMemo(() => {
        if (play) {
            return "running";
        } else {
            return "paused";
        }
    }, [play]);

    const currentKeyframe = useMemo(() => {
        return movementArray[keyframeIndex];
    }, [keyframeIndex, movementArray]);

    const { time, easing, point } = useMemo(() => {
        return keyframeList[keyframeIndex];
    }, [keyframeIndex, keyframeList]);

    const Component = styled.div`
        display: inline-block;
        position: absolute;
        top: ${point.y}px;
        left: ${point.x}px;
        animation: ${currentKeyframe} ${time}s ${easing};
        animation-play-state: ${playState};
    `;

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
