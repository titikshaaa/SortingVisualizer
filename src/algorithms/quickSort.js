import resetColors from '../helpers/resetColors';

function quickSort(array) {
  let newArray = [...array];
  let colorArray = [];
  let historyStepsArray = [];
  let historyColorsArray = [];

  // 0) Restarting colors before algorithm animation:
  colorArray = resetColors(newArray.length);
  historyStepsArray.push([...newArray]);
  historyColorsArray.push([...colorArray]);

  // 1) Starting algorithm in a recursive function
  quickSortRecursion(
    newArray,
    colorArray,
    0,
    newArray.length - 1,
    historyStepsArray,
    historyColorsArray
  );

  return { historyStepsArray, historyColorsArray, sortedArray: newArray };
}

export default quickSort;

function quickSortRecursion(
  array,
  colors,
  start,
  end,
  historyStepsArray,
  historyColorsArray
) {
  if (end <= start) return; // End of recursion branch

  const pivot = partition(
    array,
    colors,
    start,
    end,
    historyStepsArray,
    historyColorsArray
  );
  quickSortRecursion(
    array,
    colors,
    start,
    pivot - 1,
    historyStepsArray,
    historyColorsArray
  );
  quickSortRecursion(
    array,
    colors,
    pivot + 1,
    end,
    historyStepsArray,
    historyColorsArray
  );
}

function partition(
  array,
  colors,
  start,
  end,
  historyStepsArray,
  historyColorsArray
) {
  // 1.1) Defining pivot
  let pivot = array[end];
  let i = start - 1;

  // 1.2) Visualize the place of the pivot
  colors[end] = '#5f3dc4';
  historyStepsArray.push([...array]);
  historyColorsArray.push([...colors]);

  for (let j = start; j <= end; j++) {
    if (array[j] < pivot) {
      i++;
      if (i !== j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        // 2) Adding whole arrays as a history step:
        colors[i] = '#e03131';
        colors[j] = '#e03131';
        historyStepsArray.push([...array]);
        historyColorsArray.push([...colors]);
      } else {
        // 2) Adding whole arrays as a history step:
        colors[i] = '#2f9e44';
        historyStepsArray.push([...array]);
        historyColorsArray.push([...colors]);
      }

      colors[i] = '#4dabf7';
      colors[j] = '#4dabf7';
      ////////////////////////////////////
    }
    // 2) Adding whole arrays as a history step:
    colors[j] = '#2f9e44';
    historyStepsArray.push([...array]);
    historyColorsArray.push([...colors]);
    colors[j] = '#4dabf7';
    ////////////////////////////////////
  }

  i++;
  let temp = array[i];
  array[i] = array[end];
  array[end] = temp;

  // 3) Adding whole arrays as a history step:
  colors[i] = '#fcc419';
  colors[end] = '#fcc419';
  console.log(i, colors[i]);
  historyStepsArray.push([...array]);
  historyColorsArray.push([...colors]);
  ////////////////////////////////////

  // 4) Restarting pivot
  colors[i] = '#4dabf7';
  colors[end] = '#4dabf7';
  historyStepsArray.push([...array]);
  historyColorsArray.push([...colors]);
  ////////////////////////////////////

  return i;
}
