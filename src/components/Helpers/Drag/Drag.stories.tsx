import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropArea from "./DropArea/DropArea";
import DropTarget from "./DropTarget/DropTarget";
import Droppable from "./Droppable/Droppable";

export default {
    title: "Drag",
    component: DropArea,
} as ComponentMeta<typeof DropArea>;

export const Primary: ComponentStory<typeof DropArea> = () => (
    <DropArea
        onDropItem={(droppableId: string, dropTargetId: string) =>
            console.log("test drop", droppableId, dropTargetId)
        }
    >
        <DropTarget id="drag1">
            <div
                style={{
                    display: "inline-block",
                    height: "100px",
                    width: "100px",
                    backgroundColor: "red",
                }}
            >
                test
            </div>
        </DropTarget>
        <Droppable id="drop1">
            <div
                style={{
                    display: "inline-block",
                    backgroundColor: "blue",
                }}
            >
                Test
            </div>
        </Droppable>
    </DropArea>
);

Primary.storyName = "Drag";
