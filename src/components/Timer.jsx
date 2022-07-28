import React, { useState } from 'react'

export default function Timer() {

  const [timer, setTimer] = useState(0);

  return (
    <div className='bg-[#ffe4e2] opacity-100 rounded-3xl shadow-2xl mx-auto my-0 w-2/6 h-4/6 flex content-center items-center justify-center justify-items-center self-center'>
        <div className="container flex flex-col content-center items-center justify-center justify-items-center self-center">
            <h1 className='font-onlytitles font-medium text-6xl text-[#F23345]'>Pomodoro Timer</h1>
            <p className='font-onlybody font-semibold text-[#FB5042] mt-3'>Get relaxed. Your 25 minutes are about to begin.</p>
            <div className='circle bg-gradient-to-b from-[#F23345] to-[#FB5042] w-72 h-72 rounded-full my-9'></div>
            <button className='w-3/12 flex content-center items-center justify-center justify-items-center self-center bg-[#F23345] hover:bg-[#FB5042] text-white font-bold py-2 px-14 border-b-4 border-[#c42330] hover:border-[#d83024] rounded-lg text-white'>Start</button>
        </div> 
    </div>
  )
}
