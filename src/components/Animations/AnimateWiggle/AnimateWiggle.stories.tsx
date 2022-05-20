import React, { useState, useMemo } from "react";
import { ComponentMeta } from "@storybook/react";
import AnimateWiggle from "./AnimateWiggle";
import Axis from "../../../lib/Geometry/Axis";

export default {
    title: "AnimateWiggle",
    component: AnimateWiggle,
    argTypes: {},
} as ComponentMeta<typeof AnimateWiggle>;

export const Primary = (args: any) => {
    const [play, setPlay] = useState(false);

    const playMessage = useMemo(() => {
        return !play ? "play" : "pause";
    }, [play]);

    return (
        <>
            <button onClick={() => setPlay(!play)}>{playMessage}</button>
            <AnimateWiggle
                play={play}
                count={0}
                axis={Axis.X}
                easing="linear"
                time={0.1}
                offset={5}
                onAnimationEnd={() => console.log("On AnimateWiggle End")}
            >
                test
            </AnimateWiggle>
        </>
    );
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateWiggle";
