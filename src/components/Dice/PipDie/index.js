import classes from "./PipDie.module.scss";

/**
 *
 * @param {*} props
 * @returns
 */
const PipDie = ({ faceValue, color, hexColor }) => {
    const className = [classes[color]].join(" ");
    const facePips = new Array(faceValue).fill(<div className={classes.pip} />);
    return <div className={className}>{facePips}</div>;
};

export default PipDie;

/**
 * This should handle state of a dice
 */
