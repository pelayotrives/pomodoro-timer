//? Using context we can use global variables.
import { createContext, useState } from "react";

//! 1.) First we declare the constant for createContext();
const UtilityContext = createContext();

function ContextWrapper(props) { //! 2.) We create our function with props.

  //! 3.) We add our global variables that we want to pass to other components. We will make an object to make it easier to de-structure it.

  const styles = {
    // Div
    styleDivDefault: {
        background: "#FFE4E2"
    },
    styleDivToggled: {
        background: "#FFE4E2"
    },
    // Circle
    styleDefault: {
        background: "#F33345"
    },
    styleToggled: {
        background: "#FFE4E2"
    },
    // Text
    styleTextDefault: {
        color: "white"
    },
    styleTextToggled: {
        color: "#F33345"
    },
  };

  //! 4.) We create our context that will be passed to our children. After that, we will have to de-structure it like, FE: styles.styleToggled
  const passedContext = {
    styles
  };

  return (
    //! 5.) We apply this formula to send our context.
    <UtilityContext.Provider value={passedContext}>
      {props.children}
    </UtilityContext.Provider>
  );
}

//! 6.) We export our UtilityContext and ContextWrapper
export { UtilityContext, ContextWrapper };

// ...

//! 7.) We import it (index.js - line 7) ---> import { ContextWrapper } from './context/global.context';
//! 8.) We wrap <App> component with <ContextWrapper> HOC (index.js - line 12)

// ...

//! 9.) We import it (Timer.jsx - line 3) ---> import { UtilityContext } from "../context/global.context";
//! 10.) We de-structure our object (Timer.jsx - line 11) ---> const {styles} = useContext(UtilityContext);
//! 11.) We do the same with any other component we want to apply our context to.

