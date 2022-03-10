import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dice, { DIE_COLOR } from ".";
import { SHAPE } from "../../Shape";

export default {
    title: "Dice",
    component: Dice,
} as ComponentMeta<typeof Dice>;

export const Primary: ComponentStory<typeof Dice> = () => (
    <Dice size={60} color={DIE_COLOR.BLACK} shape={SHAPE.SQUARE}>
        <span style={{ color: "white" }}>4</span>
    </Dice>
);

Primary.storyName = "Dice";
