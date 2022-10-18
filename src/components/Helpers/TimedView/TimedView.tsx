import React, { HTMLAttributes, useEffect } from "react";

type TimedViewProps = {
    play: boolean;
    time: number;
    onTimerEnd: Function;
};

/**
 * A component that accepts an array of child views and displays the one at the given index
 * @param param0
 * @returns
 */
const TimedView = ({
    time,
    play,
    onTimerEnd,
    children,
}: TimedViewProps & HTMLAttributes<HTMLDivElement>) => {
    useEffect(() => {
        let timeout: number;
        if (play) {
            timeout = window.setTimeout(() => {
                onTimerEnd();
            }, time);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [children, onTimerEnd, play, time]);

    return <>{children}</>;
};

export default TimedView;
