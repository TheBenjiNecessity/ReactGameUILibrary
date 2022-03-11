import React, { HTMLAttributes } from "react";
import { textColorForHex } from "../../../services/color.service";
import { SHAPE_CLASS } from "../../Shape";
import Dice, { DieProps, DieShapeProps } from "../Dice";
import classes from "./StringDice.module.scss";

type StringDieProps = {
    faceValue: string;
};

const StringDice = (props: StringDieProps & DieProps & DieShapeProps) => {
    const { faceValue, size, color, shape, ...restProps } = props;
    const textColor = textColorForHex(color);
    const classNames = [classes["wrapper"], classes[SHAPE_CLASS[shape]]].join(
        " "
    );
    const minFontSize = Math.max(size - 8, 8);
    const wrapperStyles = {
        color: textColor,
        lineHeight: `${size}px`,
        fontSize: `${minFontSize}px`,
    };

    return (
        <Dice size={size} color={color} shape={shape} {...restProps}>
            <div className={classNames} style={wrapperStyles}>
                {faceValue}
            </div>
        </Dice>
    );
};

export default StringDice;
