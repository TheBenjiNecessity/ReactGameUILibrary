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
            <p>
                <AnimateWiggle
                    play={play}
                    count={5}
                    axis={Axis.X}
                    easing="linear"
                    time={0.1}
                    offset={5}
                    onAnimationEnd={() => console.log("On AnimateWiggle End")}
                    style={{ display: "inline-block" }}
                >
                    <span
                        style={{ border: "1px solid black", padding: "0 5px" }}
                    >
                        test
                    </span>
                </AnimateWiggle>
            </p>

            <p>
                <AnimateWiggle
                    play={true}
                    count={0}
                    axis={Axis.X}
                    easing="linear"
                    time={0.5}
                    offset={5}
                >
                    x axis
                </AnimateWiggle>
            </p>

            <p>
                <AnimateWiggle
                    play={true}
                    count={0}
                    axis={Axis.Y}
                    easing="linear"
                    time={0.5}
                    offset={5}
                >
                    y axis
                </AnimateWiggle>
            </p>
        </>
    );
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateWiggle";
