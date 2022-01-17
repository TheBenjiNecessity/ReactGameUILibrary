import React, { useCallback, useEffect } from "react";
import Chapter from "./Chapter";

/**
 * Show a series of
 * @param {boolean} activate - Story will only execute if activate is true, will pause if false.
 * @param {boolean} goNext - A message from parent to go to the next step programmatically.
 * @param {callback} didGoNext - Called whenever this component goes to the next step (sends parameters for previous stepIndex and next stepIndex)
 * @param {callback} didEnd - Called when the story is over
 * @param {callback} getNextIndex - Function provided by the parent component telling Story what index to go to on moving next.
 * @returns
 */
type StoryProps = {
    activate: boolean;
    chapterIndex: number;
    setChapterIndex: Function;
    didGoNext: Function;
    didEnd: Function;
    getNextIndex: Function;
    children: any;
};

// TODO: needs error checking on chapter (duration value is negative/two chapters have the same id)
// TODO: needs to be able to pause the execution with 'activate'

const Story = ({
    activate,
    chapterIndex,
    setChapterIndex,
    didGoNext,
    didEnd,
    getNextIndex = (index: number) => index + 1,
    children,
}: StoryProps) => {
    const childArray = React.Children.toArray(children);

    const goToNextStep = useCallback(() => {
        const nextChapterId = getNextIndex(chapterIndex);

        if (!nextChapterId || nextChapterId >= React.Children.count(children)) {
            if (didEnd && typeof didEnd === "function") {
                didEnd();
            }
        } else {
            setChapterIndex(nextChapterId);
            didGoNext(chapterIndex, nextChapterId);
        }
    }, [
        chapterIndex,
        children,
        didEnd,
        didGoNext,
        getNextIndex,
        setChapterIndex,
    ]);

    // Start the next timer if there is one
    useEffect(() => {
        const child = React.Children.toArray(children)[chapterIndex];

        if (React.isValidElement<{ duration: number }>(child)) {
            const { duration } = child.props;

            if (activate && duration) {
                const timer = setTimeout(() => {
                    goToNextStep();
                }, duration);
                return () => clearTimeout(timer);
            }
        }
    }, [activate, chapterIndex, childArray, children, goToNextStep]);

    return React.Children.toArray(children)[chapterIndex];
};

Story.Chapter = Chapter;

export default Story;
