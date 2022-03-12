import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Shape, { SHAPE } from ".";

export default {
    title: "Shape",
    component: Shape,
} as ComponentMeta<typeof Shape>;

export const Primary: ComponentStory<typeof Shape> = () => (
    <>
        <p>
            <Shape size={60} color="#ff0000" shape={SHAPE.SQUARE} />
        </p>
        <p>
            <Shape size={60} color="#0000ff" shape={SHAPE.CIRCLE} />
        </p>
        <p>
            <Shape size={60} color="#00ff00" shape={SHAPE.TRIANGLE} />
        </p>
        <p>
            <Shape size={60} color="#ffff00" shape={SHAPE.HEXAGON} />
        </p>
        <p>
            <Shape size={60} color="#ff00ff" shape={SHAPE.OCTAGON} />
        </p>
        <p>
            <Shape size={60} color="#00ffff" shape={SHAPE.DIAMOND} />
        </p>
        <p>
            <Shape size={60} color="#000000" shape={SHAPE.PENTAGON} />
        </p>
    </>
);

Primary.storyName = "Shape";
