import * as _ from 'lodash';

export const arrayGetRandomElement = (array) => {
	const randomElementIndex = arrayGetRandomIndex(array);
	return array[randomElementIndex];
};

export const arrayGetRandomIndex = (array) => {
	const lastElementIndex = array.length - 1;
	return _.random(0, lastElementIndex);
};
