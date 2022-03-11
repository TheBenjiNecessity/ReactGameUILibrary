import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import StringDice from ".";
import { DIE_COLOR } from "../Dice";
import { SHAPE } from "../../Shape";

import classes from "../../stories.module.scss";

export default {
    title: "StringDice",
    component: StringDice,
} as ComponentMeta<typeof StringDice>;

export const Primary: ComponentStory<typeof StringDice> = () => (
    <>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="1"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="2"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="3"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="5"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="6"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="7"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="8"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="9"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
    </>
);

Primary.storyName = "StringDice";

export const Secondary: ComponentStory<typeof StringDice> = () => (
    <>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.SQUARE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLACK}
                shape={SHAPE.CIRCLE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.RED}
                shape={SHAPE.TRIANGLE}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.BLUE}
                shape={SHAPE.PENTAGON}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.GREEN}
                shape={SHAPE.HEXAGON}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.YELLOW}
                shape={SHAPE.OCTAGON}
            />
        </div>
        <div className={classes.presentingContainer}>
            <StringDice
                faceValue="4"
                size={60}
                color={DIE_COLOR.ORANGE}
                shape={SHAPE.DIAMOND}
            />
        </div>
    </>
);

Secondary.storyName = "StringDice with various shapes and colors";
