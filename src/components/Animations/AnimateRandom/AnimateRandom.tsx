import React, { useEffect, useMemo, HTMLAttributes, useState } from "react";
import { MILLISECONDS_IN_SECCOND } from "../../../lib/Constants/time.constants";
import { arrayGetRandomIndex } from "../../../services/random.service";
import View from "./AnimateRandom.view";

type AnimateRandomProps = {
    play: boolean;
    time?: number;
};

const AnimateRandom = ({
    play,
    time = 1,
    children,
}: AnimateRandomProps & HTMLAttributes<HTMLDivElement>) => {
    const [currentRandomIndex, setCurrentRandomIndex] = useState(-1);

    const childrenArray = useMemo(
        () => React.Children.toArray(children),
        [children]
    );

    const currentChild = useMemo(() => {
        if (
            currentRandomIndex < 0 ||
            currentRandomIndex >= childrenArray.length
        ) {
            return null;
        }

        return childrenArray[currentRandomIndex];
    }, [childrenArray, currentRandomIndex]);

    useEffect(() => {
        let timeout: number;
        if (play) {
            timeout = window.setTimeout(() => {
                let randomIndex = currentRandomIndex;
                while (randomIndex === currentRandomIndex) {
                    randomIndex = arrayGetRandomIndex(childrenArray);
                }
                setCurrentRandomIndex(randomIndex);
            }, time * MILLISECONDS_IN_SECCOND);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [childrenArray, currentRandomIndex, play, time]);

    useEffect(() => {
        React.Children.forEach(children, (child: any) => {
            if (child?.type.name !== "View") {
                throw new Error(
                    "Children of AnimateRandom should be of type `AnimateRandom.View`."
                );
            }
        });
    }, [children]);

    return <>{currentChild}</>;
};

AnimateRandom.View = View;

export default AnimateRandom;
