import React from "react";
import { textColorForHex } from "../../../services/color.service";
import classes from "./NumberDie.module.scss";

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

type NumberDieProps = {
    faceValue: number;
    dimension: number;
    color: string;
};

const NumberDie = ({ faceValue, dimension, color }: NumberDieProps) => {
    const dimensionString = dimension + "px";
    const textColor = textColorForHex(color);

    return (
        <div
            className={classes["die"]}
            style={{
                height: dimensionString,
                width: dimensionString,
                fontSize: dimensionString,
                lineHeight: dimensionString,
                backgroundColor: color,
                color: textColor,
            }}
        >
            {faceValue}
        </div>
    );
};

export default NumberDie;
