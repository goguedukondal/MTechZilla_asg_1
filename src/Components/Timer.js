import React, { useState, useEffect } from 'react';
import './Timer.css'
import Auth from './Auth';
function Timer() {
  const [time, setTime] = useState(1500); 
  const [isBreak, setIsBreak] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
     
      setIsRunning(false);

      if (!isBreak) {
       
        setTime(300);
        setIsBreak(true);
        setIsRunning(true);
      } else {
       
        setIsBreak(false);
        setTime(1500); 
      }
    }
  }, [time, isBreak]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTime(1500); 
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className='timer_continer'>
      <h1>{isBreak ? 'Break Timer' : 'Work Timer'}</h1>
      <h2>{formatTime(time)}</h2>
      <button className='start' onClick={startTimer}>Start</button>
      <button className='pause' onClick={pauseTimer}>Pause</button>
      <button className='reset' onClick={resetTimer}>Reset</button>
      <p>
        <Auth/>
      </p>
    </div>
  );
}

export default Timer;
