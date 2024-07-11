import React, { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';
import SpeedSlider from './Speedslider';
import ShareButton from './Share';
import RandomQuote from './Randomquote';
import './Tracking.css';

const Tracking = () => {
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedSpeed = urlParams.get('speed');
    if (sharedSpeed) {
      setSpeed(Number(sharedSpeed));
    }
  }, []);

  return (
    <div className="tracking-container">
      <h2>Tracking Screen</h2>
      <AnalogClock speed={speed} />
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
      <ShareButton speed={speed} />
      <RandomQuote />
    </div>
  );
};

export default Tracking;
