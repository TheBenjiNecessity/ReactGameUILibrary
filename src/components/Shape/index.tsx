import React, { useMemo } from 'react';
import classes from './Shape.module.scss';
import { ReactComponent as Pentagon } from '../../assets/images/pentagon.svg';
import { ReactComponent as Diamond } from '../../assets/images/diamond.svg';
import { ReactComponent as Hexagon } from '../../assets/images/hexagon.svg';
import { ReactComponent as Octagon } from '../../assets/images/octagon.svg';
import { ShapeProps } from './ShapeProps';
import Square from './Square';
import Circle from './Circle';
import Triangle from './Triangle';

export enum SHAPE {
	SQUARE,
	CIRCLE,
	TRIANGLE,
	HEXAGON,
	OCTAGON,
	DIAMOND,
	PENTAGON
}

const SHAPE_ICON = {
	[SHAPE.SQUARE]: Square,
	[SHAPE.CIRCLE]: Circle,
	[SHAPE.TRIANGLE]: Triangle,
	[SHAPE.HEXAGON]: Hexagon,
	[SHAPE.OCTAGON]: Octagon,
	[SHAPE.DIAMOND]: Diamond,
	[SHAPE.PENTAGON]: Pentagon
};

type Props = {
	children: object;
	className?: string;
	shape: SHAPE;
};

const Shape = (props: ShapeProps & Props) => {
	const { children, className, color, size, shape } = props;
	const classNames = [ className, classes['shape'] ].join(' ');
	const Component = useMemo(() => SHAPE_ICON[shape], [ shape ]);

	return (
		<div
			className={classNames}
			style={{
				height: `${size}px`,
				width: `${size}px`
			}}
		>
			<Component height={size} width={size} fill={color} stroke={color} />
			{children && <div className={classes['shape-wrapper']}>{children}</div>}
		</div>
	);
};

export default Shape;