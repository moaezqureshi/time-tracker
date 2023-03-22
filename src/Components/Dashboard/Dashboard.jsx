import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'
import "./Dashboard.css";

function Dashboard(props) {
  let {userData, setUserdata} = props;
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <>
      <div className="container">
        <h3>Hello <strong>{userData.name}</strong></h3>
        <div className="row-reverse">
            <div className="col-9">
                <div className="input-container">
                    <input type="text" name="taskName" id="taskName" className='form-control bg-transparent' placeholder='Enter your task'/>

                    <input type="date" name="startData" id="startDate" className='form-control'/>

                    <div className="stopwatch-container">
      <div className="stopwatch-buttons">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
        
      </p>
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Dashboard
