import React, { useState, useEffect } from 'react';

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Define the birthday date (change this to the birthday date)
  const birthdayDate = new Date('2025-02-14T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = birthdayDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval); // Stop the countdown when the birthday is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [birthdayDate]);

  return (
    <div className="countdown d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="text-center container">
        <h1 className="mb-4 display-4">Countdown to Udy's Birthday!</h1>
        <div className="d-flex row justify-content-center gap-3">
          <div className="col-4 col-md-2 times p-4 rounded text-center">
            <p className="fs-1">{timeLeft.days}</p>
            <span>Days</span>
          </div>
          <div className="col-4 col-md-2 times p-4 rounded text-center">
            <p className="fs-1">{timeLeft.hours}</p>
            <span>Hours</span>
          </div>
          <div className="col-4 col-md-2 times p-4 rounded text-center">
            <p className="fs-1">{timeLeft.minutes}</p>
            <span>Minutes</span>
          </div>
          <div className="col-4 col-md-2 times p-4 rounded text-center">
            <p className="fs-1">{timeLeft.seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BirthdayCountdown;
