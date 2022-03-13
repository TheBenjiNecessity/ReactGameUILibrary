import * as _ from "lodash";

export const arrayGetRandomElement = (array: any[]) => {
    const randomElementIndex = arrayGetRandomIndex(array);
    return array[randomElementIndex];
};

export const arrayGetRandomIndex = (array: any[]) => {
    const lastElementIndex = array.length - 1;
    return _.random(0, lastElementIndex);
};
