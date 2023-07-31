import React, { useEffect, useState } from 'react';

import './styles/general.css';
import './styles/queries.css';

import Visualizer from './components/Visualizer';
import Toolbar from './components/Toolbar';

import generateArray from './helpers/generateArray';
import resetColors from './helpers/resetColors';
import generateStepsArrays from './helpers/generateStepsArrays';

function App() {
  const [array, setArray] = useState([]);
  const [colors, setColors] = useState([]);
  const [timeouts, setTimeouts] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const [arraySize, setArraySize] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(100);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');

  useEffect(() => {
    generateArrayHandler(arraySize);
  }, [arraySize]);

  function generateArrayHandler(arraySize) {
    const newArray = generateArray(arraySize);
    const newColors = resetColors(arraySize);

    setArray(newArray);
    setColors(newColors);
  }

  function startAnimation(historyStepsArray, historyColorsArray) {
    setIsSorting(true);
    let newTimeouts = [];
    for (let i = 0; i < historyStepsArray.length; i++) {
      let timeout = setTimeout(() => {
        setArray([...historyStepsArray[i]]);
        setColors([...historyColorsArray[i]]);

        if (i === historyColorsArray.length - 1) {
          setIsSorting(false);
        }
      }, animationSpeed * (i + 1));
      newTimeouts.push(timeout);
    }
    setTimeouts(newTimeouts);
  }

  function startAnimationHandler() {
    const { historyStepsArray, historyColorsArray } = generateStepsArrays(
      array,
      colors,
      selectedAlgorithm
    );

    startAnimation(historyStepsArray, historyColorsArray);
  }

  function stopAnimationHandler() {
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    setTimeouts([]);

    const newColors = resetColors(arraySize);
    setColors(newColors);

    setIsSorting(false);
  }

  return (
    <>
      <Toolbar
        startAnimationHandler={startAnimationHandler}
        generateArrayHandler={generateArrayHandler}
        stopAnimationHandler={stopAnimationHandler}
        arraySize={arraySize}
        setArraySize={setArraySize}
        animationSpeed={animationSpeed}
        setAnimationSpeed={setAnimationSpeed}
        isSorting={isSorting}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />
      <Visualizer array={array} colors={colors} arraySize={arraySize} />
    </>
  );
}

export default App;
