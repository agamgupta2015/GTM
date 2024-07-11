import React, { useState, useEffect, useRef } from 'react';
import './AnalogClock.css';

const AnalogClock = ({ speed }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() - 120);
    
    const updateClock = () => {
      setCurrentTime(prevTime => {
        const newTime = new Date(prevTime.getTime() - 1000 / speed);
        if (newTime <= targetTime) {
          clearInterval(intervalRef.current);
          return targetTime;
        }
        return newTime;
      });
    };

    intervalRef.current = setInterval(updateClock, 1000 / speed);

    return () => clearInterval(intervalRef.current);
  }, [speed]);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  const minuteDeg = (minutes / 60) * 360;
  const secondDeg = (seconds / 60) * 360;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(-${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(-${minuteDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(-${secondDeg}deg)` }} />
      <div className="center"></div>
    </div>
  );
};

export default AnalogClock;
