import {useState, useEffect} from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);    

    useEffect(() => {
      let interval = null;
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (interval) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => { 

        setIsRunning(true);
    };

    const handleStop = () => { 

        setIsRunning(false);
    };

    const handleReset = () => { 

        setTime(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:

            {("0" + ((time / 10) % 100)).slice(-2)}</p> 

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}       

export default StopWatch;
