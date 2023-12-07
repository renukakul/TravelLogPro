import { useState, useEffect } from 'react';

// ProgressBar component that displays a countdown timer as a progress bar
export default function ProgressBar({ timer }) {
  // State to track the remaining time on the progress bar
  const [remainingTime, setRemainingTime] = useState(timer);

  // useEffect hook to update the remaining time at regular intervals
  useEffect(() => {
    // Set up an interval to decrement the remaining time every 10 milliseconds
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Render a progress element with the current remaining time and the specified timer duration
  return <progress value={remainingTime} max={timer} />;
}
