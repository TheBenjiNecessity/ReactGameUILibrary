import React, { useCallback, useMemo } from "react";
import useChildrenOfTypeError from "../../hooks/useChildrenOfTypeError.hook";
import ArrayView from "../Helpers/ArrayView/ArrayView";
import TimedView from "../Helpers/TimedView/TimedView";
import Chapter from "./Chapter";

type StoryProps = {
    play: boolean;
    chapterIndex: number;
    setChapterIndex: Function;
    didGoNext: Function;
    didEnd: Function;
    getNextIndex: Function;
    children: any;
};

/**
 * Show a series of sub components called "Chapters" in succession. Simply set the "play" prop to true and the Story
 * component will show each Chapter component one at a time either after a timer or on parent state change
 * @param {boolean} play - Story will only execute if play is true, will pause if false.
 * @param {callback} didGoNext - Called whenever this component goes to the next step (sends parameters for previous stepIndex and next stepIndex)
 * @param {callback} didEnd - Called when the story is over
 * @param {callback} getNextIndex - Function provided by the parent component telling Story what index to go to on moving next.
 * @returns
 */
const Story = ({
    play,
    chapterIndex,
    setChapterIndex,
    didGoNext = () => {},
    didEnd = () => {},
    getNextIndex = (index: number) => index + 1,
    children,
}: StoryProps) => {
    useChildrenOfTypeError(children, "Chapter", "Story");

    const chapterDuration = useMemo(() => {
        const child = React.Children.toArray(children)[chapterIndex];

        if (React.isValidElement<{ duration: number }>(child)) {
            const { duration } = child.props;

            return duration;
        }

        return 0;
    }, [chapterIndex, children]);

    const goToNextStep = useCallback(() => {
        const nextChapterId = getNextIndex(chapterIndex);
        const count = React.Children.count(children);

        if (!nextChapterId || nextChapterId >= count || nextChapterId < 0) {
            didEnd();
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

    return (
        <TimedView time={chapterDuration} play={play} onTimerEnd={goToNextStep}>
            <ArrayView index={chapterIndex}>{children}</ArrayView>
        </TimedView>
    );
};

Story.Chapter = Chapter;

export default Story;
