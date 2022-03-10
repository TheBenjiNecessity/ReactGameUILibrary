import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import AutoTextbox from ".";

export default {
    title: "Example/AutoTextbox",
    component: AutoTextbox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AutoTextbox>;

export const Primary = () => {
    // Sets the hooks for both the label and primary props
    const [animate, setAnimate] = useState(false);
    const [reset, setReset] = useState(false);

    return (
        <>
            <AutoTextbox
                animate={animate}
                value={"testing"}
                reset={reset}
                onReset={() => setReset(false)}
                onFinish={() => setAnimate(false)}
                textbox={<input type="text" />}
            />
            <button type="button" onClick={() => setAnimate(true)}>
                Animate
            </button>
            <button
                type="button"
                onClick={() => {
                    setReset(true);
                    setAnimate(false);
                }}
            >
                Reset
            </button>
        </>
    );
};

Primary.storyName = "AutoTextbox";
