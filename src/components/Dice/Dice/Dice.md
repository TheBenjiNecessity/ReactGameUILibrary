Dice example:

```js
import { DIE_COLOR } from ".";
import { SHAPE } from "../../Shape";

<>
    <Dice faceValue={4} size={60} color={DIE_COLOR.BLACK} shape={SHAPE.SQUARE} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.BLACK} shape={SHAPE.CIRCLE} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.BLUE} shape={SHAPE.PENTAGON} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.GREEN} shape={SHAPE.HEXAGON} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.YELLOW} shape={SHAPE.OCTAGON} />
    <Dice faceValue={4} size={60} color={DIE_COLOR.ORANGE} shape={SHAPE.DIAMOND} />

    <Dice faceValue={4} size={60} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={50} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={40} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={30} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={20} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
    <Dice faceValue={4} size={10} color={DIE_COLOR.RED} shape={SHAPE.TRIANGLE} />
</>;
```
