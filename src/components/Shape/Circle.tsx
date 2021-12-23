type CircleProps = {
	fill: string;
	height: number;
	width: number;
};

const Circle = (props: CircleProps) => {
	const { height, width, fill } = props;

	return (
		<div
			style={{
				height: `${height}px`,
				width: `${width}px`,
				backgroundColor: fill,
				borderRadius: '50%'
			}}
		/>
	);
};

export default Circle;
