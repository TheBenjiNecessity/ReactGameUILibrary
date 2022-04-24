import { keyframes } from "styled-components";
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
