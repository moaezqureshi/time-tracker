import React, { useState } from "react";
import TimeTracker from "../TimeTracker";
import "./Dashboard.css";

function Dashboard() {
  // Define state variables for tracking time and the timer status
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Toggle the timer status between running and stopped
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Reset the timer to zero and stop it
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="container">
      {/* Display a welcome message */}
      <h3>Hello, User</h3>
      {/* Create a container for the task input and timer */}
      <div className="input-container">
        {/* Create an input for the task name */}
        <input type="text" placeholder="Enter task name" />
        {/* Create an input for the task start date */}
        <input type="date" />
        {/* Create a container for the timer */}
        <div className="timer-container">
          {/* Render the TimeTracker component */}
          <TimeTracker time={time} isRunning={isRunning} />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
