import React, { useState, useContext, useEffect, useRef } from "react";
//! Importing context from folder context.
import { UtilityContext } from "../context/global.context";
//! Moment (npm i moment) -> Installed to convert units in useState to seconds.
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export default function Timer() {
  //! De-structuring our context object and console.log to make easier logs.
  const {styles, toggleButton, isActive, setIsActive} = useContext(UtilityContext);
  const {log} = console;
  const myInterval = useRef();
  //! useState() consts.
  const [breaklength, setBreaklength] = useState(300);
  const [sessionlength, setSessionLength] = useState(1500);
  const [timeLeft, setTimeLeft] = useState(sessionlength);
  const [timeRunning, setTimeRunning] = useState(false);
  // log(styles);

  //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //! ---------------- This makes our timer to reset the interval and STOP counting the time, not just restarting the item per se. ----------------

  useEffect(() => {
    // log("The component did mount.")
    if (timeRunning) {
      myInterval.current = setInterval(() => {
        setTimeLeft(previousTime => {
          const currentTime = previousTime - 1;
          if (currentTime >= 0) {
            return previousTime - 1;
          }
          return previousTime;
        });
        // log("Interval working.");
        setTimeRunning(true);
      }, 1);
    }

    return () => {
      clearInterval(myInterval.current);
    }
  }, [timeRunning])

  //! ---------------- Breaks length ----------------

  // Decrement intervals function (break).
  const decrementBreaklength = () => {
    let newDecrement = breaklength - 60;
    newDecrement < 0 ? setBreaklength(0) : setBreaklength(newDecrement);
  };

  // Increment intervals function (break).
  const incrementBreaklength = () => {
    let newIncrement = breaklength + 60;
    newIncrement >= 1500 ? setBreaklength(1500) : setBreaklength(newIncrement);
  };


  //! ---------------- Session Length ----------------

  // Decrement intervals function (sesion).
  const decrementSessionlength = () => {
    let newDecrement = sessionlength - 60;
    newDecrement < 0 ? setSessionLength(0) : setSessionLength(newDecrement);
  };

  // Increment intervals function (session).
  const incrementSessionlength = () => {
    let newIncrement = sessionlength + 60;
    newIncrement >= 1500 ? setSessionLength(1500) : setSessionLength(newIncrement);
  };

  //! ---------------- Start button ----------------

  // Starting the counter function.
  const handleStarter = () => {
    setTimeRunning(true);
  };

  //! ---------------- Reset button ----------------

  // Restarting the counter function.
  const handleRestarter = () => {
    timeRunning && 
      clearInterval(myInterval.current);
      setSessionLength(1500);
      setTimeLeft(1500);
      setBreaklength(300);
      setTimeRunning(false);
      myInterval.current = null;
  };

  //! ---------------- Button testing ----------------

  // Testing buttons function.
  const eventClick = () => {
    log("Testing");
  };

  //! ---------------- Double function starter ----------------
  // Double function to be called on onClick event.
  const doubleFunctionStarter = () => {
    eventClick();
    handleStarter();
  }

  //! ---------------- Double function restarter ----------------
  // Double function to be called on onClick event.
  const doubleFunctionRestarter = () => {
    eventClick();
    handleRestarter();
  }

  //! Converting with moment seconds to minutes for using them later on.
  const breaklengthConverted = moment.duration(breaklength, "s").minutes();
  const sessionlengthConverted = moment.duration(sessionlength, "s").minutes();
  // * {trim:false} makes our time to look in the format "00:58" instead of "58".
  const timeLeftConverted = moment.duration(timeLeft, "s").format("mm:ss", {trim:false});

  //! ---------------- Time Left useEffect() ----------------

  useEffect(() => {
    setTimeLeft(sessionlength);
    log('The session has changed.', sessionlength);
  }, [sessionlength]);
  

  return (
    <div style={isActive === false ? styles.styleDivDefault : styles.styleDivToggled} className="flex flex-col opacity-100 rounded-3xl shadow-2xl mx-auto my-0 w-2/6 h-4/6 flex content-center items-center justify-center justify-items-center self-center">

     <div className="container flex flex-col content-center items-center justify-center justify-items-center self-center">
        
        {/* Title and toggle. */}

        {/* Title. */}
        <h1 style={isActive === false ? styles.styleTextDefault : styles.styleTextToggled} className="font-onlytitles font-medium text-6xl text-[#F23345]">Pomodoro Timer</h1>

        {/* Toggle. */}
        <div className="toggle-button flex flex-row items-center justify-center mt-5">
          <div className="flex flex-col mx-auto my-0 justify-center justify-items-center items-center content-center self-center">
            <label className="flex relative items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" readOnly />
              <div onClick={toggleButton} className="w-11 h-6 bg-[#F7C6C5] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#334674]"></div>
            </label>
          </div>
        </div>

        {/* Circle div and content inside it (session time). */}
        <div style={isActive === false ? styles.styleDefault : styles.styleToggled} className="circle shadow-reddy w-64 h-64 rounded-full my-8 relative hover:scale-105 transition-all">
          <div className="circle-wrapper absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center justify-items-center items-center content-center self-center">
            <p style={styles.styleTextSessionDefault} className="w-full text-center font-onlybody font-regular tracking-wider text-2xl">Progress</p>
            <p style={styles.styleTextSessionDefault} className="w-full mt-2 text-center font-onlybody font-regular tracking-wide text-7xl timer">{timeLeftConverted}</p>
          </div>
        </div>

        {/* Start - Restart button. */}
        <div className="buttons w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center">
          {/* Start button. */}
          <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={doubleFunctionStarter} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">Start</button>
          {/* Restart  button. */}
          <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={doubleFunctionRestarter} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">Reset</button>
        </div>

        {/* Break / Session length sections. */}
        <div className="break-and-session w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center mt-6">
          {/* Session section. */}
          <div className="session-section flex flex-col justify-center justify-items-center items-center content-center self-center">
            <div className="session-section-title mb-3">
              <p style={isActive === false ? styles.styleTextDefault : styles.styleTextToggled} className="font-onlytitles font-medium text-xl text-[#F23345]">Session length</p>
            </div>
            <div className="session-section-content flex flex-row">
              <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={decrementSessionlength} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">-</button>
              <p style={isActive === false ? styles.styleTextDefault : styles.styleTextToggled} className="flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] w-16">{sessionlengthConverted}</p>
              <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={incrementSessionlength} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">+</button>
            </div>
          </div>

          {/* Break section. */}
          <div className="break-section flex flex-col justify-center justify-items-center items-center content-center self-center">
            <div className="break-section-title mb-3">
              <p style={isActive === false ? styles.styleTextDefault : styles.styleTextToggled} className="font-onlytitles font-medium text-xl text-[#F23345]">Break length</p>
            </div>
            <div className="break-section-content flex flex-row">
              <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={decrementBreaklength} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">-</button>
              <p style={isActive === false ? styles.styleTextDefault : styles.styleTextToggled} className="flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] w-16">{breaklengthConverted}</p>
              <button style={isActive === false ? styles.styleButtonDefault : styles.styleButtonToggled} onClick={incrementBreaklength} className="flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] hover:brightness-150 transition-all">+</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
