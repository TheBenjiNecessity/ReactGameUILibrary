import styled, { keyframes } from "styled-components";
import Point from "../../../lib/Geometry/Point";

const getKeyFrames = (offset: Point) => {
    return keyframes` 
        0% {
            transform: translate(0px, 0px);
        }
        10% {
            transform: translate(-${offset.x}px, -${offset.y}px);
        }
        20% {
            transform: translate(${offset.x}px, ${offset.y}px);
        }
        30% {
            transform: translate(-${offset.x}px, -${offset.y}px);
        }
        40% {
            transform: translate(${offset.x}px, ${offset.y}px);
        }
        50% {
            transform: translate(-${offset.x}px, -${offset.y}px);
        }
        60% {
            transform: translate(${offset.x}px, ${offset.y}px);
        }
        70% {
            transform: translate(-${offset.x}px, -${offset.y}px);
        }
        80% {
            transform: translate(${offset.x}px, ${offset.y}px);
        }
        90% {
            transform: translate(-${offset.x}px, -${offset.y}px);
        }
        100% {
            transform: translate(${offset.x}px, ${offset.y}px);
        }
    `;
};

export const getAnimationComponent = (
    time: number,
    easing: string,
    iterationCount: string,
    playState: string,
    offset: Point
) => {
    const keyframe = getKeyFrames(offset);

    return styled.div`
        animation: ${keyframe} ${time}s ${easing};
        animation-iteration-count: ${iterationCount};
        animation-play-state: ${playState};
    `;
};
