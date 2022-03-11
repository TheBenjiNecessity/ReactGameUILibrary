import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PipDie from ".";
import { DIE_COLOR } from "../Dice";

import classes from "../../stories.module.scss";

export default {
    title: "PipDie",
    component: PipDie,
} as ComponentMeta<typeof PipDie>;

export const Primary: ComponentStory<typeof PipDie> = () => (
    <>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={1} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={2} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={3} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={4} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={5} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={6} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={7} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={8} size={60} color={DIE_COLOR.BLACK} />
        </div>
        <div className={classes.presentingContainer}>
            <PipDie faceValue={9} size={60} color={DIE_COLOR.BLACK} />
        </div>
    </>
);

Primary.storyName = "PipDie";
