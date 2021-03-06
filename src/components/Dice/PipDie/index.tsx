import React from "react";
import { textColorForHex } from "../../../services/color.service";
import { SHAPE } from "../../Shape";
import Dice, { DieProps } from "../Dice";
import classes from "./PipDie.module.scss";

type PipDieProps = {
    faceValue: number;
};

const PipDie = (props: PipDieProps & DieProps) => {
    const { faceValue, color, size } = props;

    const wrapperStyles = {
        fontSize: `${size}px`,
    };

    const pipStyles = {
        backgroundColor: textColorForHex(color),
    };

    const classNames = [
        classes["wrapper"],
        classes[`arrangement-${faceValue}`],
    ].join(" ");

    const facePips = new Array(faceValue).fill(
        <div className={classes["pip"]} style={pipStyles} />
    );

    return (
        <Dice size={size} color={color} shape={SHAPE.SQUARE}>
            <div className={classNames} style={wrapperStyles}>
                {facePips}
            </div>
        </Dice>
    );
};

export default PipDie;
