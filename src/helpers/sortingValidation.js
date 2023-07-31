function sortingValidation(initialArray, sortedArray) {
  const validationArray = [...initialArray.sort((a, b) => a - b)];

  let colorArray = new Array(initialArray.length).fill(`#4dabf7`);
  let validationStepsArray = [];
  let validationColorsArray = [];

  for (let i = 0; i < validationArray.length; i++) {
    if ((sortedArray[i] = validationArray[i])) {
      colorArray[i] = '#2f9e44';
    } else {
      colorArray[i] = '#e03131';
    }

    // 2) Adding whole array as a history step:
    validationStepsArray.push([...sortedArray]);
    validationColorsArray.push([...colorArray]);
  }

  return { validationStepsArray, validationColorsArray };
}

export default sortingValidation;
