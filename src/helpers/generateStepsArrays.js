import bubbleSort from '../algorithms/bubbleSort';
import insertionSort from '../algorithms/insertionSort';
import mergeSort from '../algorithms/mergeSort';
import quickSort from '../algorithms/quickSort';

import sortingValidation from './sortingValidation';

const generateStepsArrays = (array, colors, algorithmName) => {
  const initialArray = [...array];
  const initialColors = [...colors];
  let historyStepsArray = [];
  let historyColorsArray = [];
  let sortedArray = [];

  if (algorithmName === 'bubble') {
    ({ historyStepsArray, historyColorsArray, sortedArray } = bubbleSort(
      initialArray,
      initialColors
    ));
  }

  if (algorithmName === 'insertion') {
    ({ historyStepsArray, historyColorsArray, sortedArray } = insertionSort(
      initialArray,
      initialColors
    ));
  }

  if (algorithmName === 'merge') {
    ({ historyStepsArray, historyColorsArray, sortedArray } = mergeSort(
      initialArray,
      initialColors
    ));
  }

  if (algorithmName === 'quick') {
    ({ historyStepsArray, historyColorsArray, sortedArray } = quickSort(
      initialArray,
      initialColors
    ));
  }

  // Adding a validation animation
  const { validationStepsArray, validationColorsArray } = sortingValidation(
    initialArray,
    sortedArray
  );

  historyStepsArray.push(...validationStepsArray);
  historyColorsArray.push(...validationColorsArray);

  return { historyStepsArray, historyColorsArray };
};

export default generateStepsArrays;
