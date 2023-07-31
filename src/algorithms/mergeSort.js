import resetColors from '../helpers/resetColors';

function mergeSort(array) {
  let newArray = [...array];
  let colorArray = [];
  let historyStepsArray = [];
  let historyColorsArray = [];

  // 0) Restarting colors before algorithm animation:
  colorArray = resetColors(newArray.length);
  historyStepsArray.push([...newArray]);
  historyColorsArray.push([...colorArray]);

  // 1) Starting algorithm in a recursive function
  mergeSortRecursion(
    newArray,
    colorArray,
    0,
    newArray.length - 1,
    historyStepsArray,
    historyColorsArray
  );

  return { historyStepsArray, historyColorsArray, sortedArray: newArray };
}

export default mergeSort;

function mergeSortRecursion(
  array,
  colors,
  left,
  right,
  historyStepsArray,
  historyColorsArray
) {
  if (right <= left) return; // End of recursion branch

  // 1.1) Creating left and right array indexes
  const middle = left + Math.floor((right - left) / 2);

  // 1.2) Recursive calls
  mergeSortRecursion(
    array,
    colors,
    left,
    middle,
    historyStepsArray,
    historyColorsArray
  );
  mergeSortRecursion(
    array,
    colors,
    middle + 1,
    right,
    historyStepsArray,
    historyColorsArray
  );
  // 1.3) Each resursive complete call (left and right) merge
  merge(
    array,
    colors,
    left,
    middle,
    right,
    historyStepsArray,
    historyColorsArray
  );
}

function merge(
  array,
  colors,
  left,
  middle,
  right,
  historyStepsArray,
  historyColorsArray
) {
  const helperArray = [...array];
  colors = resetColors(array.length);

  let leftIndex = left;
  let rightIndex = middle + 1;
  let arrayIndex = left;

  while (leftIndex < middle + 1 && rightIndex < right + 1) {
    if (helperArray[leftIndex] <= helperArray[rightIndex]) {
      array[arrayIndex] = helperArray[leftIndex];

      // 2) Adding whole arrays as a history step:
      colors[arrayIndex] = '#2f9e44';
      colors[rightIndex] = '#2f9e44';
      historyStepsArray.push([...array]);
      historyColorsArray.push([...colors]);
      colors[arrayIndex] = '#4dabf7';
      colors[leftIndex] = '#4dabf7';
      ////////////////////////////////////

      leftIndex++;
    } else {
      array[arrayIndex] = helperArray[rightIndex];

      // 2) Adding whole arrays as a history step:
      colors[arrayIndex] = '#e03131';
      colors[rightIndex] = '#e03131';
      historyStepsArray.push([...array]);
      historyColorsArray.push([...colors]);
      colors[arrayIndex] = '#4dabf7';
      colors[rightIndex] = '#4dabf7';
      ////////////////////////////////////

      rightIndex++;
    }

    arrayIndex++;
  }

  while (leftIndex < middle + 1) {
    array[arrayIndex] = helperArray[leftIndex];

    // 3) Adding whole arrays as a history step:
    colors[arrayIndex] = '#5f3dc4';
    historyStepsArray.push([...array]);
    historyColorsArray.push([...colors]);
    ////////////////////////////////////

    leftIndex++;
    arrayIndex++;
  }

  while (rightIndex < right + 1) {
    array[arrayIndex] = helperArray[rightIndex];

    // 4) Adding whole arrays as a history step:
    colors[arrayIndex] = '#5f3dc4';
    historyStepsArray.push([...array]);
    historyColorsArray.push([...colors]);
    ////////////////////////////////////

    rightIndex++;
    arrayIndex++;
  }
}
