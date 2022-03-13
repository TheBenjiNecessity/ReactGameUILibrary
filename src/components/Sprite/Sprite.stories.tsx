import React from "react";
import { ComponentMeta } from "@storybook/react";

import Sprite from ".";

export default {
    title: "Sprite",
    component: Sprite,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Sprite>;

export const Primary = () => {
    return (
        <>
            <div>
                <Sprite
                    image="https://i.stack.imgur.com/sOemp.png"
                    coordX={0}
                    coordY={0}
                    height={75}
                    width={75}
                />
                <Sprite
                    image="https://i.stack.imgur.com/sOemp.png"
                    coordX={-75}
                    coordY={0}
                    height={75}
                    width={75}
                />
            </div>
            <div>
                <Sprite
                    image="https://i.stack.imgur.com/sOemp.png"
                    coordX={0}
                    coordY={-75}
                    height={75}
                    width={75}
                />
                <Sprite
                    image="https://i.stack.imgur.com/sOemp.png"
                    coordX={-75}
                    coordY={-75}
                    height={75}
                    width={75}
                />
            </div>
        </>
    );
};

Primary.storyName = "Sprite";
