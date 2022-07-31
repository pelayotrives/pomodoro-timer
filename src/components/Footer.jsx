import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* fixed bottom-0 left-0 w-screen h-14 lets stick the footer to the bottom. */}
        <footer className='fixed bottom-0 left-0 w-screen h-14 p-3 font-onlybody font-regular text-white tracking-wide'>Made with 🤍 by&nbsp;<a className='underline' href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">Pelayo Trives</a></footer>
    </div>
  )
}
