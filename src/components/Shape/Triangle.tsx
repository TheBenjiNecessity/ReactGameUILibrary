import { ShapeComponentProps } from "./Types";

const Triangle = (props: ShapeComponentProps) => {
    const { height, width, fill } = props;
    const size = height || width;

    return (
        <div
            style={{
                height: 0,
                width: 0,
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid ${fill}`,
            }}
        />
    );
};

export default Triangle;
