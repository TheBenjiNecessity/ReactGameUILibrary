import classes from './Sprite.module.scss';

type SpriteProps = {
	image: string;
	coordX: number;
	coordY: number;
	height: number;
	width: number;
};

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Sprite = (props: SpriteProps) => {
	const { image, coordX, coordY, height, width } = props;
	const style = {
		backgroundImage: `url(${image})`,
		backgroundPosition: `${coordX}px ${coordY}px`,
		height: `${height}px`,
		width: `${width}px`
	};

	return <div className={classes.wrapper} style={style} />;
};

export default Sprite;
