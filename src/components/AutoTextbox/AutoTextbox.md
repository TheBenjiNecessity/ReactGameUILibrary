AutoTextbox example:

```js
import React, { useState } from 'react';

const [animate, setAnimate] = useState(false);
const [reset, setReset] = useState(false);

<>
    <AutoTextbox
        animate={animate}
        value={'testing'}
        reset={reset}
        onReset={() => setReset(false)}
        onFinish={() => setAnimate(false)}
        textbox={<input type="text" />}/>
    <button
        type="button"
        onClick={() => setAnimate(true)}>
        Animate
    </button>
    <button
        type="button"
        onClick={() => {
        setReset(true); setAnimate(false);
    }}>
        Reset
    </button>
</>;
```
