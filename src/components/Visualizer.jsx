import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Visualizer = (props) => {
  const { array, colors, arraySize } = props;

  const ref = useRef(null);
  const [widthVisualizer, setWidthVisualizer] = useState(null);

  // Measuring Viusalizer's width in 'px' (displaying values on bars)
  useLayoutEffect(() => {
    setWidthVisualizer(ref.current.clientWidth);
  }, [arraySize]);

  useEffect(() => {
    function handleWindowResize() {
      setWidthVisualizer(ref.current.clientWidth);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <main>
      <div className="visualizer-container" ref={ref}>
        {array.map((value, idx) => {
          return (
            <div
              className="bar"
              key={idx}
              style={{
                backgroundColor: `${colors[idx]}`,
                height: `${value}%`,
                width: `${100 / arraySize}%`,
              }}
            >
              {widthVisualizer / arraySize > 30 ? value : ''}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Visualizer;
