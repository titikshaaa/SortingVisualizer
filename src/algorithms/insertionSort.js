import resetColors from '../helpers/resetColors';

function insertionSort(array) {
  let newArray = [...array];
  let colorArray = [];
  let historyStepsArray = [];
  let historyColorsArray = [];

  // 0) Restarting colors before algorithm animation:
  colorArray = resetColors(newArray.length);
  historyStepsArray.push([...newArray]);
  historyColorsArray.push([...colorArray]);

  for (let i = 1; i < newArray.length; i++) {
    let j = i;

    while (j > 0) {
      if (newArray[j - 1] > newArray[j]) {
        // 1.1) Changing values:
        let temp = newArray[j];
        newArray[j] = newArray[j - 1];
        newArray[j - 1] = temp;

        // 1.2) Adding colors:
        for (let k = 0; k < j - 1; k++) {
          colorArray[k] = '#fcc419';
        }
        colorArray[j - 1] = '#e03131';
      } else {
        // 1.2) Adding colors:
        for (let k = 0; k < j - 1; k++) {
          colorArray[k] = '#fcc419';
        }
        colorArray[j] = '#2f9e44';
        colorArray[j - 1] = '#2f9e44';
      }

      // 2) Adding whole array as a history step:
      historyStepsArray.push([...newArray]);
      historyColorsArray.push([...colorArray]);

      // 3) Restarting colors:
      colorArray = new Array(newArray.length).fill(`#4dabf7`);

      j--;
    }
  }

  return { historyStepsArray, historyColorsArray, sortedArray: newArray };
}

export default insertionSort;
