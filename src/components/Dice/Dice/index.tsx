import React from "react";
import Shape, { SHAPE } from "../../Shape";

export const DIE_COLOR = {
    WHITE: "#ffffff",
    BLACK: "#000000",
    RED: "#ff0000",
    GREEN: "#00ff00",
    BLUE: "#0000ff",
    YELLOW: "#ffff00",
    ORANGE: "#FFA500",
    PURPLE: "#800080",
};

type DieProps = {
    children: object;
    size: number;
    color: string;
    shape: SHAPE;
};

const Dice = (props: DieProps) => {
    const { children, size, color, shape } = props;

    return (
        <Shape size={size} color={color} shape={shape}>
            {children}
        </Shape>
    );
};

export default Dice;

/**
 * Die
 *      Number Die
 *      String Die
 *      Pip Die
 *      Image Die
 *          Sprite Die
 *
 * Dice can have different:
 *      - shapes
 *      - numbers vs pips vs images vs strings
 *      - size?
 *      - 3D?
 *      -
 */
