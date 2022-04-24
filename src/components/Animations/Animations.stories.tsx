import React, { useState, useMemo } from "react";
import { ComponentMeta } from "@storybook/react";

import AnimateSpin from "./AnimateSpin";
import AnimateObject from "./AnimateObject";
import Point from "../../lib/Geometry/Point";

export default {
    title: "AnimateSpin",
    component: AnimateSpin,
    argTypes: {},
} as ComponentMeta<typeof AnimateSpin>;

export const Primary = (args: any) => {
    return <AnimateSpin {...args}>test</AnimateSpin>;
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateSpin";

export const Secondary = (args: any) => {
    const [play, setPlay] = useState(false);
    const [keyframeIndex, setKeyframeIndex] = useState(0);
    const keyframeList = [
        { point: new Point(0, 0), time: 2, easing: "linear" },
        { point: new Point(100, 100), time: 2, easing: "linear" },
        { point: new Point(200, 100), time: 2, easing: "linear" },
        { point: new Point(100, 200), time: 2, easing: "linear" },
    ];

    const playMessage = useMemo(() => {
        return !play ? "play" : "pause";
    }, [play]);

    return (
        <>
            <button onClick={() => setPlay(!play)}>{playMessage}</button>
            <button onClick={() => setKeyframeIndex(0)}>Reset</button>
            <AnimateObject
                play={play}
                keyframeList={keyframeList}
                keyframeIndex={keyframeIndex}
                setKeyframeIndex={setKeyframeIndex}
                loop={true}
                count={3}
            >
                test
            </AnimateObject>
        </>
    );
};

Secondary.args = {
    play: true,
};

Secondary.storyName = "AnimateObject";
