import React, { useState } from 'react'
// Moment (npm i moment) -> Installed to convert units in useState to seconds.
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
momentDurationFormatSetup(moment)

export default function Timer() {

  const [breaklength, setBreaklength] = useState(300);
  const [sessionlength, setSessionlength] = useState(300);
  const [sessiontime, setSessionTime] = useState(sessionlength * 5);

  //! This will help to toggle our colors.
  const [isActive, setIsActive] = useState(false);

  // Decrement intervals function (break).
  const decrementBreaklength = () => {
    let newDecrement = breaklength - 60;
    if (newDecrement < 0) {
      setBreaklength(0);
    } else {
      setBreaklength(newDecrement);
    }
  }

  // Increment intervals function (break).
  const incrementBreaklength = () => {
    let newIncrement = breaklength + 60;
    if (newIncrement >= 1500) {
      setBreaklength(1500);
    } else {
      setBreaklength(newIncrement);
    }
  }

  // Decrement intervals function (sesion).
  const decrementSessionlength = () => {
    let newDecrement = sessionlength - 300;
    if (newDecrement < 0) {
      setSessionlength(0);
    } else {
      setSessionlength(newDecrement);
    }
  }

  // Increment intervals function (session).
   const incrementSessionlength = () => {
    let newIncrement = sessionlength + 300;
    if (newIncrement >= 1500) {
      setSessionlength(1500);
    } else {
      setSessionlength(newIncrement);
    }
  }

  // Testing buttons function.
  const eventClick = () => {
    console.log("Testing");
  }

  // Change colors when toggle function.
  const toggleButton = () => {
    setIsActive(!isActive)
    console.log("Toggle working.");
  }

  // Style constants

  // Circle
  const styleDefault = {
    background: "#F33345"
  }
  const styleToggled = {
    background: "#FFE4E2"
  }
  // Circle's text
  const styleTextDefault = {
    color: "white"
  }
  const styleTextToggled = {
    color: "#F33345"
  }

  // Converting with moment seconds to minutes for using them later on.
  const breaklengthConverted = moment.duration(breaklength, 's').minutes();
  const sessionlengthConverted = moment.duration(sessionlength, 's').minutes();
  const sessiontimeConverted = moment.duration(sessiontime, 's').format('mm:ss');

  return (
      
      <div className='flex flex-col bg-[#ffe4e2] opacity-100 rounded-3xl shadow-2xl mx-auto my-0 w-2/6 h-4/6 flex content-center items-center justify-center justify-items-center self-center'>

          <div className="container flex flex-col content-center items-center justify-center justify-items-center self-center">

              {/* Title and toggle. */}
              <h1 className='font-onlytitles font-medium text-6xl text-[#F23345]'>Pomodoro Timer</h1>

              <div className="toggle-button flex flex-col items-center justify-center mt-5">
                <div className="flex">
                  <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                  type="checkbox"
                  className="sr-only peer"
                  readOnly
                  />
                  <div
                  onClick={toggleButton}
                  className="w-11 h-6 bg-[#F7C6C5] rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F33345]">
                  </div>
                  </label>
                </div>
              </div>
              
              {/* Circle div and content inside it (session time). */}
              <div style={isActive === false ? styleDefault : styleToggled} className='circle shadow-reddy w-64 h-64 rounded-full my-8 relative'>
                <div className='circle-wrapper absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center justify-items-center items-center content-center self-center'>
                  <p style={isActive === false ? styleTextDefault : styleTextToggled} className='w-full text-center font-onlybody font-regular tracking-wider text-2xl'>Progress</p>
                  <p style={isActive === false ? styleTextDefault : styleTextToggled} className='w-full mt-2 text-center font-onlybody font-regular tracking-wide text-7xl timer'>{sessiontimeConverted}</p>
                </div>
              </div>

              {/* Start - Restart button. */}
              <div className="buttons w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center">
                <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-4 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>Start</button>
                <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-4 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>Restart</button>
              </div>

              {/* Break / Session length sections. */}
              <div className="break-and-session w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center mt-6">

                {/* Session section. */}
                <div className="session-section flex flex-col justify-center justify-items-center items-center content-center self-center">
                    <div className="session-section-title mb-3">
                      <p className='font-onlytitles font-medium text-xl text-[#F23345]'>Session length</p>
                    </div>
                    <div className="session-section-content flex flex-row">
                      <button onClick={decrementSessionlength} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>-</button>
                      <p className='flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] w-16'>{sessionlengthConverted}</p>
                      <button onClick={incrementSessionlength} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>+</button>
                    </div>
                  </div>
                
                {/* Break section. */}
                <div className="break-section flex flex-col justify-center justify-items-center items-center content-center self-center">
                  <div className="break-section-title mb-3">
                    <p className='font-onlytitles font-medium text-xl text-[#F23345]'>Break length</p>
                  </div>
                  <div className="break-section-content flex flex-row">
                    <button onClick={decrementBreaklength} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>-</button>
                    <p className='flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] w-16'>{breaklengthConverted}</p>
                    <button onClick={incrementBreaklength} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>+</button>
                  </div>
                </div>
              </div>

          </div>
      </div>

  )
}
