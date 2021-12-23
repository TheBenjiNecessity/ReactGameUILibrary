type SquareProps = {
	fill: string;
	height: number;
	width: number;
};

const Square = (props: SquareProps) => {
	const { height, width, fill } = props;

	return (
		<div
			style={{
				height: `${height}px`,
				width: `${width}px`,
				backgroundColor: fill
			}}
		/>
	);
};

export default Square;
