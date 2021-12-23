import React from 'react';
import { textColorForHex } from '../../../services/color.service';
import { SHAPE } from '../../Shape';
import Dice from '../Dice';
import classes from './StringDice.module.scss';

export const DIE_COLOR = {
	WHITE: '#ffffff',
	BLACK: '#000000',
	RED: '#ff0000',
	GREEN: '#00ff00',
	BLUE: '#0000ff',
	YELLOW: '#ffff00',
	ORANGE: '#FFA500',
	PURPLE: '#800080'
};

const DIE_CLASS = {
	[SHAPE.TRIANGLE]: 'triangle',
	[SHAPE.PENTAGON]: 'pentagon',
	[SHAPE.CIRCLE]: 'circle',
	[SHAPE.SQUARE]: 'square',
	[SHAPE.HEXAGON]: 'hexagon',
	[SHAPE.OCTAGON]: 'octagon',
	[SHAPE.DIAMOND]: 'diamond'
};

type DieProps = {
	children: object;
	faceValue: string;
	size: number;
	color: string;
	shape: SHAPE;
};

const StringDice = (props: DieProps) => {
	const { faceValue, size, color, shape } = props;
	const textColor = textColorForHex(color);
	const classNames = [ classes['wrapper'], classes[DIE_CLASS[shape]] ].join(' ');
	const minFontSize = Math.max(size - 8, 8);
	const wrapperStyles = { color: textColor, lineHeight: `${size}px`, fontSize: `${minFontSize}px` };

	return (
		<Dice size={size} color={color} shape={shape}>
			<div className={classNames} style={wrapperStyles}>
				{faceValue}
			</div>
		</Dice>
	);
};

export default StringDice;

/**
 * Die
 *      Number Die
 *      String Die
 *      Pip Die
 *      Image Die
 *          Sprite Die
 * 
 * StringDice can have different:
 *      - shapes
 *      - numbers vs pips vs images vs strings
 *      - size?
 *      - 3D?
 *      -
 */
