import { ComponentMeta } from "@storybook/react";
import AnimateRotation from "./AnimateRotation";

export default {
    title: "AnimateRotation",
    component: AnimateRotation,
    argTypes: {},
} as ComponentMeta<typeof AnimateRotation>;

export const Primary = (args: any) => {
    return <AnimateRotation {...args}>test</AnimateRotation>;
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateRotation";
