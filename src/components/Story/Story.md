Story example:

```js
import { useState, useCallback } from "react";

const [activate, setActivate] = useState(false);
const [shouldGoNext, setShouldGoNext] = useState(false);
const [chapterIndex, setChapterIndex] = useState(0);
const [message, setMessage] = useState("start");

const didGoNext = useCallback((previous, next) => {
    setMessage([previous, next].join(" "));
}, []);
const didEnd = useCallback(() => {
    setMessage("done");
}, []);

<>
    <button onClick={() => setActivate(!activate)}>activate</button>
    <div>{message}</div>
    <div>
        <Story
            activate={activate}
            didGoNext={didGoNext}
            didEnd={didEnd}
            chapterIndex={chapterIndex}
            setChapterIndex={setChapterIndex}
        >
            <Story.Chapter duration={3000}>Chapter 1</Story.Chapter>
            <Story.Chapter duration={3000}>Chapter 2</Story.Chapter>
            <Story.Chapter duration={5000}>Chapter 3</Story.Chapter>
            <Story.Chapter duration={5000}>Chapter 4</Story.Chapter>
        </Story>
    </div>
</>;
```
