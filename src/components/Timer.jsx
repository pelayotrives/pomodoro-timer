import React, { useState } from 'react'

export default function Timer() {

  const [timer, setTimer] = useState(0);

  const eventClick = () => {
    console.log("Testing");
  }

  return (
    <div className='bg-[#ffe4e2] opacity-100 rounded-3xl shadow-2xl mx-auto my-0 w-2/6 h-4/6 flex content-center items-center justify-center justify-items-center self-center'>
        <div className="container flex flex-col content-center items-center justify-center justify-items-center self-center">
            {/* Title and subtitle. */}
            <h1 className='font-onlytitles font-medium text-6xl text-[#F23345]'>Pomodoro Timer</h1>
            <p className='font-onlybody font-semibold text-[#FB5042] mt-3'>Get relaxed. Your 25 minutes are about to begin.</p>
            {/* Circle div and content inside it. */}
            <div className='circle bg-gradient-to-b shadow-md from-[#F23345] to-[#FB5042] w-64 h-64 rounded-full my-8 relative'>
              <div className='circle-wrapper absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center justify-items-center items-center content-center self-center'>
                <p className='w-full text-center text-white font-onlybody font-regular tracking-wider text-2xl'>Progress</p>
                <p className='w-full mt-2 text-center text-white font-onlybody font-regular tracking-wide text-7xl timer'>{timer}</p>
              </div>
            </div>
            {/* Start button. */}
            <div className="buttons w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center">
              <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-4 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>Start</button>
              <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold w-3/12 py-2 px-14 rounded-lg bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-4 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>Restart</button>
            </div>
            {/* Break / Session length sections. */}
            <div className="break-and-session w-full flex flex-row justify-evenly justify-items-center content-evenly items-center self-center mt-6">
              {/* Break section. */}
              <div className="break-section flex flex-col justify-center justify-items-center items-center content-center self-center">
                <div className="break-section-title mb-3">
                  <p className='font-onlytitles font-medium text-xl text-[#F23345]'>Break length</p>
                </div>
                <div className="break-section-content flex flex-row">
                  <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>-</button>
                  <p className='flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] mx-5'>0</p>
                  <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>+</button>
                </div>
              </div>
              {/* Session section. */}
              <div className="session-section flex flex-col justify-center justify-items-center items-center content-center self-center">
                <div className="session-section-title mb-3">
                  <p className='font-onlytitles font-medium text-xl text-[#F23345]'>Session length</p>
                </div>
                <div className="session-section-content flex flex-row">
                  <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>-</button>
                  <p className='flex content-center items-center justify-center justify-items-center self-center font-onlytitles font-medium text-xl text-[#F23345] mx-5'>0</p>
                  <button onClick={eventClick} className='flex content-center items-center justify-center justify-items-center self-center text-white font-bold py-2 px-4 rounded-full bg-[#F23345] hover:bg-[#FB5042] active:bg-[#d62433] border-b-2 border-[#c42330] hover:border-[#d83024] active:border-[#8c0009]'>+</button>
                </div>
              </div>
            </div>
        </div> 
    </div>
  )
}
