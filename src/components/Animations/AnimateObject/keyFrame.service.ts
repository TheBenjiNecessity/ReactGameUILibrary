import styled, { Keyframes, keyframes } from "styled-components";
import Point from "../../../lib/Geometry/Point";
import { IKeyframe } from "./AnimateObject";

export const getKeyFrame = (fromKeyframe: IKeyframe, toKeyframe: IKeyframe) => {
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
};

export const getAnimationComponent = (
    point: Point,
    currentKeyframe: Keyframes | null,
    time: number,
    easing: string,
    playState: string
) => {
    return styled.div`
        display: inline-block;
        position: absolute;
        top: ${point.y}px;
        left: ${point.x}px;
        animation: ${currentKeyframe} ${time}s ${easing};
        animation-play-state: ${playState};
    `;
};
