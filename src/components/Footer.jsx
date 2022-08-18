import React, {useContext} from 'react'
import { UtilityContext } from '../context/global.context';

export default function Footer() {

  // Targetting the empty span.
  const copyrightYear = document.querySelectorAll(".current-copyright-year")
  // We assign the current year to the span.
  copyrightYear.innerText = new Date().getFullYear();

  // De-structuring our context object.
  const {styles, toggleButton, isActive, setIsActive} = useContext(UtilityContext);

  return (
    <div className="xs:hidden sm:hidden md:flex">
        {/* fixed bottom-0 left-0 w-screen h-14 lets stick the footer to the bottom. */}
        <footer className='fixed bottom-0 left-0 w-screen h-14 p-3 font-onlybody font-regular text-white tracking-wide'>{isActive === true &&
            " Dark Mode | "
          } Made with 🤍 by&nbsp;
          <a className='underline' href="https://www.linkedin.com/in/pelayo-trives-pozuelo/">Pelayo Trives</a> - 
              <span className="current-copyright-year">&nbsp;{copyrightYear.innerText}</span>&nbsp;©
        </footer>
    </div>
  )
}
