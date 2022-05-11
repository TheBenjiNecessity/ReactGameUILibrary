import { ComponentMeta } from "@storybook/react";
import { useMemo, useState } from "react";

import AnimateScale from "./AnimateScale";

export default {
    title: "AnimateScale",
    component: AnimateScale,
    argTypes: {},
} as ComponentMeta<typeof AnimateScale>;

export const Primary = (args: any) => {
    const [scale, setScale] = useState(false);

    const playMessage = useMemo(() => {
        return !scale ? "scale" : "unscale";
    }, [scale]);

    return (
        <>
            <button onClick={() => setScale(!scale)}>{playMessage}</button>
            <AnimateScale
                scale={scale}
                style={{ position: "absolute", left: "1rem" }}
                {...args}
            >
                test
            </AnimateScale>
        </>
    );
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateScale";
