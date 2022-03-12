import { ShapeComponentProps } from "./Types";

const Square = (props: ShapeComponentProps) => {
    const { height, width, fill } = props;

    return (
        <div
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: fill,
            }}
        />
    );
};

export default Square;
