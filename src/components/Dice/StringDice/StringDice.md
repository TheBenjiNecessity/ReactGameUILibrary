StringDice example:

```js
import { DIE_COLOR } from ".";
import { SHAPE } from "../../Shape";

<>
    <StringDice faceValue={4} size={60} color={DIE_COLOR.BLACK} shape={SHAPE.SQUARE} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.BLACK} shape={SHAPE.CIRCLE} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.BLUE} shape={SHAPE.PENTAGON} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.GREEN} shape={SHAPE.HEXAGON} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.YELLOW} shape={SHAPE.OCTAGON} />
    <StringDice faceValue={4} size={60} color={DIE_COLOR.ORANGE} shape={SHAPE.DIAMOND} />

    <StringDice faceValue={4} size={60} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={50} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={40} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={30} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={20} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <StringDice faceValue={4} size={10} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
</>;
```
