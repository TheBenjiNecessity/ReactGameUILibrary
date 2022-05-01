import { useMemo } from "react";
import { IKeyframe } from "./AnimateTranslation";
import { getKeyFrame } from "./keyFrame.service";

const useMovementArray = (keyframeList: IKeyframe[], loop: boolean) => {
    return useMemo(() => {
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
};

export default useMovementArray;
