import React, { useState, useRef } from "react";
import axios from "axios";

const TimeTracker = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setElapsedTime(0);
  };

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        "https://api.sendgrid.com/v3/mail/send",
        {
          personalizations: [
            {
              to: [{ email: "demo@example.com" }],
              subject: "The clock is still ticking",
            },
          ],
          from: { email: "noreply@example.com" },
          content: [
            {
              type: "text/plain",
              value: "Why are you still working?",
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="">
      <div className="timer">
      <h1>{formatTime(elapsedTime)}</h1>
      </div>
      <div className="buttons-timer">
      {!isRunning ? (
        <button onClick={startTimer} className='btn-success btn'>Start</button>
      ) : (
        <button onClick={stopTimer} className='btn-danger btn'>Stop</button>
      )}
      <button onClick={resetTimer} className='btn-dark ms-3 btn'>Reset</button>
      </div>
    </div>
  );
};

export default TimeTracker;
