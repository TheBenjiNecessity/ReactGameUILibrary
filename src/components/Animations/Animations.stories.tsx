import React, { useState, useMemo } from "react";
import { ComponentMeta } from "@storybook/react";

import AnimateRotation from "./AnimateRotation/AnimateRotation";
import AnimateTranslation from "./AnimateTranslation/AnimateTranslation";
import Point from "../../lib/Geometry/Point";
import AnimateFlip from "./AnimateFlip/AnimateFlip";

export default {
    title: "AnimateRotation",
    component: AnimateRotation,
    argTypes: {},
} as ComponentMeta<typeof AnimateRotation>;

export const Primary = (args: any) => {
    return <AnimateRotation {...args}>test</AnimateRotation>;
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateRotation";

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

Secondary.args = {
    play: true,
};

Secondary.storyName = "AnimateTranslation";

export const Tertiary = (args: any) => {
    const [flip, setFlip] = useState(false);

    const cardStyles = {
        height: "300px",
        width: "200px",
    };

    const cardStylesInner = {
        height: "100%",
        width: "100%",
    };

    return (
        <>
            <button onClick={() => setFlip(!flip)}>flip</button>
            <AnimateFlip
                flip={flip}
                back={
                    <div style={{ ...cardStylesInner, backgroundColor: "red" }}>
                        blah
                    </div>
                }
                use3D={true}
                flipSpeed={0.8}
                style={cardStyles}
                didFlip={(flipped: boolean) => console.log("did flip", flipped)}
            >
                <div style={{ ...cardStylesInner, backgroundColor: "blue" }}>
                    test
                </div>
            </AnimateFlip>
        </>
    );
};

Tertiary.args = {
    play: true,
};

Tertiary.storyName = "AnimateFlip";
