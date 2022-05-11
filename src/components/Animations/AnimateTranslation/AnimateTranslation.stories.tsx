import React, { useState, useMemo } from "react";
import { ComponentMeta } from "@storybook/react";
import AnimateTranslation from "./AnimateTranslation";
import Point from "../../../lib/Geometry/Point";

export default {
    title: "AnimateTranslation",
    component: AnimateTranslation,
    argTypes: {},
} as ComponentMeta<typeof AnimateTranslation>;

export const Primary = (args: any) => {
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
            <AnimateTranslation
                play={play}
                keyframeList={keyframeList}
                keyframeIndex={keyframeIndex}
                setKeyframeIndex={setKeyframeIndex}
                loop={true}
                count={3}
            >
                test
            </AnimateTranslation>
        </>
    );
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateTranslation";
