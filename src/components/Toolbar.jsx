import React from 'react';

const Toolbar = (props) => {
  const {
    generateArrayHandler,
    stopAnimationHandler,
    arraySize,
    setArraySize,
    animationSpeed,
    setAnimationSpeed,
    isSorting,
    selectedAlgorithm,
    setSelectedAlgorithm,
    startAnimationHandler,
  } = props;

  const speedValues = [5, 20, 50, 100, 250, 500];

  return (
    <header>
      <div className="toolbar-container">
        <div className="grid">
          <div>
            <h2>Settings:</h2>
            <div className="settings">
              <label>Array size:</label>
              <input
                type="range"
                min="10"
                max="150"
                step="10"
                value={arraySize}
                onChange={(e) => {
                  setArraySize(e.target.valueAsNumber);
                }}
                disabled={isSorting ? true : false}
              />
              <span>({arraySize})</span>
              <label>Speed (1 step):</label>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={speedValues.indexOf(animationSpeed) + 1}
                onChange={(e) => {
                  const index = e.target.valueAsNumber;
                  setAnimationSpeed(speedValues[index - 1]);
                }}
                disabled={isSorting ? true : false}
              />

              <span>({animationSpeed}ms)</span>
            </div>
          </div>

          <div>
            <h2>Algorithms:</h2>
            <div className="algorithms">
              <button
                className={`btn btn-normal ${
                  selectedAlgorithm === 'bubble' ? 'selected' : null
                }`}
                onClick={() => {
                  setSelectedAlgorithm('bubble');
                }}
                disabled={isSorting ? true : false}
              >
                Bubble Sort
              </button>
              <button
                className={`btn btn-normal ${
                  selectedAlgorithm === 'insertion' ? 'selected' : null
                }`}
                onClick={() => {
                  setSelectedAlgorithm('insertion');
                }}
                disabled={isSorting ? true : false}
              >
                Insertion Sort
              </button>
              <button
                className={`btn btn-normal ${
                  selectedAlgorithm === 'merge' ? 'selected' : null
                }`}
                onClick={() => {
                  setSelectedAlgorithm('merge');
                }}
                disabled={isSorting ? true : false}
              >
                Merge Sort
              </button>
              <button
                className={`btn btn-normal ${
                  selectedAlgorithm === 'quick' ? 'selected' : null
                }`}
                onClick={() => {
                  setSelectedAlgorithm('quick');
                }}
                disabled={isSorting ? true : false}
              >
                Quick Sort
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="main-buttons">
          <button
            className="btn btn-generate"
            onClick={() => generateArrayHandler(arraySize)}
            disabled={isSorting ? true : false}
          >
            Generate Array
          </button>
          {!isSorting ? (
            <button
              className="btn btn-main start"
              onClick={() => startAnimationHandler()}
            >
              Start
            </button>
          ) : (
            <button
              className="btn btn-main stop"
              onClick={() => stopAnimationHandler()}
            >
              Stop
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
