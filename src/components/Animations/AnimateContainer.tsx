import { HTMLAttributes } from "react";
import classes from "./AnimateContainer.module.scss";

const AnimateContainer = (props: HTMLAttributes<HTMLDivElement>) => {
    const { children } = props;

    return <div className={classes["animate-container"]}>{children}</div>;
};

export default AnimateContainer;
