import { useEffect, useMemo, useState, cloneElement } from 'react';
import _ from 'lodash';

type AutoTextboxProps = {
	animate: boolean;
	reset: boolean;
	onReset: () => void;
	onFinish: () => void;
	value: string;
	textbox: any;
};

const TIMING = () => {
	const random = _.random(1, 7);
	return random * 50 + 100;
};

const AutoTextbox = (props: AutoTextboxProps) => {
	const { animate, reset, onReset, onFinish, value, textbox, ...restProps } = props;
	const [ currentLength, setCurrentLength ] = useState(0);

	const currentValue = useMemo(
		() => {
			return value.slice(0, currentLength);
		},
		[currentLength, value]
	);

	const TextBoxComponent = useMemo(
		() => cloneElement(textbox, { ...restProps, value: currentValue, disabled: true }),
		[textbox, restProps, currentValue]
	);

	useEffect(
		() => {
			if (animate && currentLength < value.length) {
				setTimeout(() => {
					setCurrentLength(currentLength + 1);
				}, TIMING());
			} else if (currentLength >= value.length && typeof onFinish === 'function') {
				onFinish();
			}
		},
		[animate, currentLength, onFinish, value.length]
	);

	useEffect(
		() => {
			if (reset) {
				setCurrentLength(0);
				onReset();
			}
		},
		[onReset, reset]
	);

	return TextBoxComponent;
};

export default AutoTextbox;
