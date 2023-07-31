function generateArray(arraySize) {
  const newArray = [];

  for (var i = 0; i < arraySize; i++) {
    // Generating random number in <1;arraySize>
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    newArray.push(randomNumber);
  }

  return newArray;
}

export default generateArray;
