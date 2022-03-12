import { ShapeComponentProps } from "./Types";

const Circle = (props: ShapeComponentProps) => {
    const { height, width, fill } = props;

    return (
        <div
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: fill,
                borderRadius: "50%",
            }}
        />
    );
};

export default Circle;
