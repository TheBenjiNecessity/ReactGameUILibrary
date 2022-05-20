import { HTMLAttributes } from "react";
import Axis from "../../../lib/Geometry/Axis";
import Point from "../../../lib/Geometry/Point";
import { getAnimationComponent } from "./AnimateWiggleComponents";

type AnimateWiggleProps = {
    count?: number;
    play: boolean;
    easing?: string;
    time?: number;
    axis?: Axis;
    offset?: number;
    onAnimationEnd?: Function;
};

const AnimateTranslation = (
    props: AnimateWiggleProps & HTMLAttributes<HTMLDivElement>
) => {
    const {
        count = 1,
        axis = Axis.X,
        easing = "linear",
        time = 1,
        offset = 1,
        play,
        onAnimationEnd,
        children,
    } = props;
    const playState = play ? "running" : "paused";
    const iterationCount = count > 0 ? count.toString() : "infinite";

    const point = axis === Axis.X ? new Point(offset, 0) : new Point(0, offset);

    const Component = getAnimationComponent(
        time,
        easing,
        iterationCount,
        playState,
        point
    );

    return <Component onAnimationEnd={onAnimationEnd}>{children}</Component>;
};

export default AnimateTranslation;
