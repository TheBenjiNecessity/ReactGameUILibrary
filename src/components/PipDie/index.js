import classes from './PipDie.module.scss';

export const FACE_SHAPE = {
	TRIANGLE: 'triangle',
	SQUARE: 'square',
	LONG_DIAMOND: 'ltriangle',
	PENTAGON: 'pentagon'
};

/**
 * 
 * @param {*} props 
 * @returns 
 */
const PipDie = ({ faceShape, faceValue, color, size }) => {
	const className = [ classes[faceShape], classes[color] ].join(' ');
	const facePips = new Array(faceValue).fill(<div className={classes.pip} />);
	return <div className={className}>{facePips}</div>;
};

export default PipDie;

/**
 * This should handle state of a dice
 */
