import React from "react";
import classes from "./NumberDie.module.scss";

export const DIE_COLOR = {
    WHITE: "white",
    BLACK: "black",
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
    YELLOW: "yellow",
    ORANGE: "orange",
    PURPLE: "purple",
};

type NumberDieProps = {
    faceValue: number;
    dimension: number;
    color: string;
};

const NumberDie = ({ faceValue, dimension, color }: NumberDieProps) => {
    const dimensionString = dimension + "px";
    let classNames = [classes["die"]];
    let backgroundColor = "";

    if (color.startsWith("#") && (color.length === 7 || color.length === 4)) {
        backgroundColor = color;
    } else {
        classNames.push(classes[color]);
    }

    return (
        <div
            className={classNames.join(" ")}
            style={{
                height: dimensionString,
                width: dimensionString,
                fontSize: dimensionString,
                lineHeight: dimensionString,
                backgroundColor: backgroundColor,
            }}
        >
            {faceValue}
        </div>
    );
};

export default NumberDie;
