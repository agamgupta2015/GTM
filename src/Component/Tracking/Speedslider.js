import React from 'react';
import './Speedslider.css';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="slider"
      />
      <div className="speed-display">Speed: {speed}x</div>
    </div>
  );
};

export default SpeedSlider;
