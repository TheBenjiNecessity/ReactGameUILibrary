import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DragWrapper from "./DragWrapper";
import Point from "../../../lib/Geometry/Point";

export default {
    title: "DragWrapper",
    component: DragWrapper,
} as ComponentMeta<typeof DragWrapper>;

export const Primary: ComponentStory<typeof DragWrapper> = () => {
    const [position, setPosition] = useState(Point.zero);

    return (
        <DragWrapper
            position={position}
            setPosition={setPosition}
            onStart={(event, data) => console.log("started", event, data)}
            onStop={(event, data) => console.log("stoped", event, data)}
        >
            Test
        </DragWrapper>
    );
};

Primary.storyName = "DragWrapper";
