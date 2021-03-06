import { ComponentMeta } from "@storybook/react";
import AnimateRandom from "./AnimateRandom";

export default {
    title: "AnimateRandom",
    component: AnimateRandom,
    argTypes: {},
} as ComponentMeta<typeof AnimateRandom>;

export const Primary = (args: any) => {
    return (
        <AnimateRandom {...args}>
            <AnimateRandom.View>one</AnimateRandom.View>
            <AnimateRandom.View>two</AnimateRandom.View>
            <AnimateRandom.View>three</AnimateRandom.View>
            <AnimateRandom.View>four</AnimateRandom.View>
            <AnimateRandom.View>five</AnimateRandom.View>
            <AnimateRandom.View>six</AnimateRandom.View>
            <AnimateRandom.View>seven</AnimateRandom.View>
            <AnimateRandom.View>eight</AnimateRandom.View>
            <AnimateRandom.View>nine</AnimateRandom.View>
        </AnimateRandom>
    );
};

Primary.args = {
    play: true,
};

Primary.storyName = "AnimateRandom";
