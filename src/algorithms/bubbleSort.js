import resetColors from '../helpers/resetColors';

function bubbleSort(array) {
  let newArray = [...array];
  let colorArray = [];
  let historyStepsArray = [];
  let historyColorsArray = [];

  // 0) Restarting colors before algorithm animation:
  colorArray = resetColors(newArray.length);
  historyStepsArray.push([...newArray]);
  historyColorsArray.push([...colorArray]);

  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      if (newArray[j] > newArray[j + 1]) {
        // 1.1) Changing values:
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
        // 1.2) Adding colors:
        colorArray[j + 1] = '#e03131';
      } else {
        // 1.2) Adding colors:
        colorArray[j] = '#2f9e44';
        colorArray[j + 1] = '#2f9e44';
      }

      // 2) Adding whole array as a history step:
      historyStepsArray.push([...newArray]);
      historyColorsArray.push([...colorArray]);

      // 3) Restarting colors:
      colorArray[j] = '#4dabf7';
      colorArray[j + 1] = '#4dabf7';
    }
    // 4) Adding color to the last one
    colorArray[newArray.length - i - 1] = '#2f9e44';
  }
  return { historyStepsArray, historyColorsArray, sortedArray: newArray };
}

export default bubbleSort;
