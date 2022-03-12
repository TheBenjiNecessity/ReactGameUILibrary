import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PipDie from ".";
import { DIE_COLOR } from "../Dice";

export default {
    title: "PipDie",
    component: PipDie,
} as ComponentMeta<typeof PipDie>;

export const Primary: ComponentStory<typeof PipDie> = () => (
    <>
        <p>
            <PipDie faceValue={1} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={2} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={3} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={4} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={5} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={6} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={7} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={8} size={60} color={DIE_COLOR.BLACK} />
        </p>
        <p>
            <PipDie faceValue={9} size={60} color={DIE_COLOR.BLACK} />
        </p>
    </>
);

Primary.storyName = "PipDie";
