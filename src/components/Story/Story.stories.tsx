import React, { useState, useCallback } from "react";
import { ComponentMeta } from "@storybook/react";

import Story from ".";

export default {
    title: "Story",
    component: Story,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Story>;

export const Primary = () => {
    const [activate, setActivate] = useState(false);
    const [chapterIndex, setChapterIndex] = useState(0);
    const [message, setMessage] = useState("start");

    const didGoNext = useCallback((previous, next) => {
        setMessage([previous, next].join(" "));
    }, []);
    const didEnd = useCallback(() => {
        setMessage("done");
    }, []);
    const getNextIndex = useCallback((currentIndex) => {
        return [1, 2, 3, null][currentIndex];
    }, []);

    return (
        <>
            <button onClick={() => setActivate(!activate)}>activate</button>
            <div>{message}</div>
            <div>
                <Story
                    play={activate}
                    didGoNext={didGoNext}
                    didEnd={didEnd}
                    chapterIndex={chapterIndex}
                    setChapterIndex={setChapterIndex}
                    getNextIndex={getNextIndex}
                >
                    <Story.Chapter duration={3000}>Chapter 1</Story.Chapter>
                    <Story.Chapter duration={3000}>Chapter 2</Story.Chapter>
                    <Story.Chapter duration={5000}>Chapter 3</Story.Chapter>
                    <Story.Chapter duration={5000}>Chapter 4</Story.Chapter>
                </Story>
            </div>
        </>
    );
};

Primary.storyName = "Story";
