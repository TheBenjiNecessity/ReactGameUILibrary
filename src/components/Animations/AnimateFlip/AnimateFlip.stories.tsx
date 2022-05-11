import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import AnimateFlip, { FlipAxis } from "./AnimateFlip";

export default {
    title: "AnimateFlip",
    component: AnimateFlip,
    argTypes: {},
} as ComponentMeta<typeof AnimateFlip>;

export const Primary = (args: any) => {
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

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateFlip";

export const Secondary = (args: any) => {
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
                flipAxis={FlipAxis.X}
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

Secondary.args = {
    play: true,
};

Secondary.storyName = "AnimateFlipX";
