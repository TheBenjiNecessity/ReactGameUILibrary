import classes from './Sprite.module.scss';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const Sprite = ({ image, coordX, coordY, height, width }) => {
	const style = {
		backgroundImage: `url(${image})`,
		backgroundPosition: `${coordX}px ${coordY}px`,
		height: `${height}px`,
		width: `${width}px`
	};

	return <div className={classes.wrapper} style={style} />;
};

export default Sprite;
