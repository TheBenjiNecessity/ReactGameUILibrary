import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import StringDice from ".";
import { DIE_COLOR } from "../Dice";
import { SHAPE } from "../../Shape";

export default {
    title: "StringDice",
    component: StringDice,
} as ComponentMeta<typeof StringDice>;

export const Primary: ComponentStory<typeof StringDice> = () => (
    <>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.CIRCLE}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.RED}
                shape={SHAPE.TRIANGLE}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLUE}
                shape={SHAPE.PENTAGON}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.GREEN}
                shape={SHAPE.HEXAGON}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.YELLOW}
                shape={SHAPE.OCTAGON}
            />
        </p>
        <p>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.ORANGE}
                shape={SHAPE.DIAMOND}
            />
        </p>
    </>
);

Primary.storyName = "StringDice";
