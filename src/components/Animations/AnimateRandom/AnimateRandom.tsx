import _ from "lodash";
import React, { HTMLAttributes, useCallback } from "react";
import useChildrenOfTypeError from "../../../hooks/useChildrenOfTypeError.hook";
import ArrayView from "../../Helpers/ArrayView/ArrayView";
import TimedView from "../../Helpers/TimedView/TimedView";
import View from "./AnimateRandom.view";

type AnimateRandomProps = {
    play: boolean;
    time?: number;
    index: number;
    setIndex: Function;
};

/**
 * A component that accepts an array of child views of type AnimateRandom.View
 * and swaps between each one on a looping timer
 * @param {boolean} play if true, plays through the views
 * @param {number} time the amount of time in
 * @returns
 */
const AnimateRandom = ({
    play,
    time = 1,
    index,
    setIndex,
    children,
}: AnimateRandomProps & HTMLAttributes<HTMLDivElement>) => {
    useChildrenOfTypeError(children, "View", "AnimateRandom");

    const onTimerEnd = useCallback(() => {
        let randomIndex = index;
        while (randomIndex === index) {
            const { length } = React.Children.toArray(children);
            randomIndex = _.random(0, length - 1);
        }
        setIndex(randomIndex);
    }, [children, index, setIndex]);

    return (
        <TimedView time={time} play={play} onTimerEnd={onTimerEnd}>
            <ArrayView index={index}>{children}</ArrayView>
        </TimedView>
    );
};

AnimateRandom.View = View;

export default AnimateRandom;
